<template>
    <q-page class="container">
        <div class="project-card" v-for="project in projects" :key="project.id">
            <div class="card-header">
                <div @click="toggleProject(project.projectId)">
                    <q-icon :name="project.projectId === idOpenProject ? 'expand_more' : 'chevron_right'" />
                    <span>{{ project.name }}  ({{ project.costObject }})</span>
                </div>
                <q-icon name="more_vert" class="justify-end"/>
            </div>
            <div class="card-content" v-if="project.projectId === idOpenProject">
                <q-table
                    :rows="users"
                    :columns="columns"
                    row-key="name"
                    no-data-label="Нет данных"
                    :pagination.sync="pagination"
                    hide-pagination
                    table-header-class="card-content__table-title"
                    table-class="card-content__table-body"
                >
                    <template v-slot:body-cell-actions="props">
                        <q-td :props="props">
                            <q-icon name="remove"/>
                        </q-td>
                    </template>
                </q-table>
            </div>
        </div>
    </q-page>
</template>

<style lang="sass">
    body
        background-color: #F8F8F9
        font-family: Roboto, serif
        color: #2A2D43

        .project-card
            background-color: white
            width: 60%
            margin: 16px 22px
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.25)
            border-radius: 22px

            i
                font-size: 2em

            .card-header
                display: flex
                justify-content: space-between
                align-items: center
                cursor: pointer
                padding: 0 20px
                height: 54px
                font-style: normal
                font-weight: 500
                font-size: 14px
                line-height: 20px
                letter-spacing: 0.25px
                color: #2A2D43

            .card-content
                padding-bottom: 16px
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.25)
                border-radius: 22px

                .q-table__card
                    box-shadow: none

                &__table-title
                    background: #E5E6E8
                    color: #2A2D43
                    font-weight: 500

                &__table-body
                    color: #4A4D5F

                    tr:nth-child(even)
                        background-color: #ECEAF9

</style>

<script>
    import {defineComponent, ref, onMounted} from 'vue'
    import {usePersons} from "@/use/persons";

    const columns = [
        {
            name: 'name',
            required: true,
            label: 'ФИО',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
        },
        { name: 'position', label: 'Роль', field: 'position', align: 'left' },
        { name: 'rateType', label: 'Тип бюджета', field: 'rateType', align: 'left' },
        { name: 'currentValue', label: 'Занятость', field: 'currentValue', align: 'left' },
        { name: 'actions' }
    ];

    export default defineComponent ({
        setup () {
            const pagination = {
                page: 1,
                rowsPerPage: 0 // 0 means all rows
            };

            let persons = [];

            onMounted(async () => {
                await loadProjects();
                persons = await usePersons();
            });

            let users = ref([]);

            let projects = ref([]);
            async function loadProjects() {
                const response = await fetch('data/projects.json', {
                    'Content-Type': 'application/json'
                });
                projects.value = await response.json();
            }

            async function loadUsers(projectId) {
                const response = await fetch('data/resources.json', {
                    'Content-Type': 'application/json',
                });
                let allUsers = await response.json();
                users.value = allUsers.filter(u => u.projectId === projectId);
                users.value.forEach(u => {
                    const userPerson = persons.persons.find(p => p.id === u.resourceId);
                    u.name = userPerson.lastName + ' ' + userPerson.firstName + ' ' + (userPerson.middleName || '') + ' '
                })
            }

            let idOpenProject = ref(null);
            const toggleProject = (id) => {
                if (idOpenProject.value === id) {
                    idOpenProject.value = null
                } else {
                    idOpenProject.value = id;
                    loadUsers(id)
                }
            };

            return {
                columns,
                idOpenProject,
                toggleProject,
                pagination,
                projects,
                users
            }
        },
    })
</script>
