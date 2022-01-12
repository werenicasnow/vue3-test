<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <ProjectsData/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import { ref } from 'vue'
    import ProjectsData from "@/components/ProjectsData";

    export default {
        name: 'LayoutDefault',

        components: {
            ProjectsData
        },

        setup () {
            return {
                leftDrawerOpen: ref(false)
            }
        }
    }
</script>
