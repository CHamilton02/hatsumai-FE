<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['React', 'Front-end', 'Web design', 'About Me'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['React', 'Front-end', 'Web design', 'About Me', 'sefsefsgesgs'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['fegsegsegegseggesg', 'React', 'Front-end', 'Web design', 'About Me'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['React', 'awfafwfwafwfageaagwa', 'Front-end', 'Web design', 'About Me'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['React', 'awfafwfwafwfageaagwa', 'Front-end', 'Web design', 'About Me'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Build a simple portfolio website showcasing three sections: a landing page, a "Projects" section with cards displaying brief details, and a "Contact" section with a contact form. Use React for structure, Sass for styling, and ensure it is fully responsive.',
    topics: ['React', 'awfafwfwafwfageaagwa', 'Front-end', 'Web design', 'About Me'],
  },
]
</script>

<template>
  <div class="history-view-container">
    <div class="history-view">
      <h1 class="history-view__header">Previous Project Ideas</h1>
      <div class="history-view__projects-container">
        <div v-for="project in projects" :key="project.title" class="history-view__project">
          <div class="history-view__project__title">{{ project.title }}</div>
          <p class="history-view__project__description">{{ project.description }}</p>
          <div class="history-view__project__topics">
            <div
              v-for="topic in project.topics.slice(0, 2)"
              :key="`${project.title}-${topic}`"
              class="history-view__project__topics__topic"
            >
              {{ topic }}
            </div>
            <div v-if="project.topics.length > 2" class="history-view__project__topics__topic">
              {{ `+ ${project.topics.length - 2} more` }}
            </div>
          </div>
          <button class="history-view__project__view-details action-button">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/main.scss';

.history-view-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.history-view {
  max-width: 50rem;
  padding-bottom: 2rem;

  &__header {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  &__projects-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__project {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f2efe9;
    padding: 1rem;
    border-radius: 0.75rem;
    overflow: hidden;

    &__title {
      font-weight: 600;
    }

    &__description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__topics {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      width: 6rem;

      &__topic {
        background-color: main.$light-grey-3;
        padding: 0.25rem 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 0.35rem;
        font-family: 'Roboto';
        font-size: 0.9rem;
      }
    }

    &__view-details {
      white-space: nowrap;
      font-size: 1rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
    }
  }
}
</style>
