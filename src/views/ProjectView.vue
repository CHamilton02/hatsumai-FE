<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/types/Project'
import { Icon } from '@iconify/vue'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import type { TDocumentDefinitions } from 'pdfmake/interfaces'
import hatsumaiLogo from '../assets/hatsumaiLogo.svg?raw'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const project: Ref<Project | undefined> = ref()

const projectStore = useProjectStore()
const appStore = useAppStore()

onMounted(async () => {
  try {
    appStore.loading = true
    project.value = await projectStore.getProjectById(Number(route.params.id))
  } catch {
    router.push('/error')
    console.error('Unable to fetch project by id.')
  } finally {
    appStore.loading = false
  }
})

async function onDownloadButtonClick() {
  const pdfMake = await import('pdfmake/build/pdfmake')
  const pdfFonts = await import('pdfmake/build/vfs_fonts')
  pdfMake.vfs = pdfFonts.vfs || {}
  const formattedTips =
    JSON.parse(
      JSON.stringify(
        project.value?.tips?.map((tip) => {
          return { text: tip, style: 'tip' }
        }),
      ),
    ) || []

  const docDefinition: TDocumentDefinitions = {
    content: [
      { svg: hatsumaiLogo, style: 'svgLogo' },
      { text: project.value?.title || '', style: 'header' },
      { text: project.value?.description || '', style: 'body' },
      { text: 'Tips', style: 'header2' },
      { ul: formattedTips },
    ],

    styles: {
      svgLogo: {
        marginBottom: 20,
      },
      header: {
        fontSize: 24,
        alignment: 'center',
        marginBottom: 5,
      },
      body: {
        fontSize: 12,
        marginBottom: 10,
      },
      header2: {
        fontSize: 18,
        alignment: 'center',
        marginBottom: 5,
      },
      tip: {
        marginBottom: 5,
      },
    },
  }

  pdfMake.createPdf(docDefinition).download('GeneratedProject.pdf')
}
</script>

<template>
  <div class="idea-view-container">
    <div class="idea-view" v-if="project">
      <h1 class="idea-view__title">{{ project.title }}</h1>
      <p>
        {{ project.description }}
      </p>
      <h2>Tips</h2>
      <div v-for="(tip, index) in project.tips" :key="`tip-${index}`" class="idea-view__tip">
        {{ tip }}
      </div>
      <button class="action-button idea-view__download-button" @click="onDownloadButtonClick">
        <Icon icon="material-symbols-light:download-rounded" class="download-icon" />
        Download
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.idea-view-container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.idea-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  gap: 1rem;

  &__title {
    margin-top: 5rem;
  }

  &__tip {
    background-color: #f2efe9;
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
  }

  &__download-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
  }
}

.download-icon {
  width: 1.5rem;
  height: auto;
}
</style>
