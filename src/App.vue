<script>
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
    name: 'App',
    // La propiedad "components" debe llevar objeto con los componentes que 
    // queremos poder utilizar dentro de éste.
    components: { AppNavbar, AppFooter, },
}
</script>

<template>
    <div class="flex flex-col min-h-screen bg-gray-900">
        <AppNavbar />
        <main class="container p-6 mx-auto flex-grow text-gray-200">
            <!-- 
            RouterView es donde se va a montar el componente asociar a la ruta que se
            esté visitando.
            -->
            <RouterView />
        </main>
        <AppFooter />
    </div>
</template>