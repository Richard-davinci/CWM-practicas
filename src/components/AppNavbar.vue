<script>
export default {
  name: 'AppNavbar',
}
</script>

<template>
  <!--
  # Formato de los nombres de clases en Tailwind
  Hay 2 formatos de nombres de clases con los que nos podemos topar:
  1. <estilo>-<valor>
      Por ejemplo:
          .p-4                            padding: 1rem;
          .bg-slate-200                   background-color: #e2e8f0;
          .text-center                    text-align: center;

  La mayoría de las clases de Tailwind siguen este formato.

  2. <valor>
      Este formato se suele sobretodo para estilos cuyos valores son únicos.
      Es decir, no se ven repetidos en otros estilos.
      También, en algunos casos, se usa para abreviaturas de estilos que
      tienen múltiples valores.
      Por ejemplo:
          .flex                           display: flex;
          .grid                           display: grid;
          .underline                      text-decoration: underline;
  -->
  <nav class="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-lg border-b border-gray-700">
    <RouterLink
      class="text-2xl font-bold tracking-tight text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
      to="/">DV Social
    </RouterLink>
    <ul class="flex items-center space-x-6">
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/">Home
        </RouterLink>
      </li>
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/news">Noticias
        </RouterLink>
      </li>
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/chat">Chat general
        </RouterLink>
      </li>
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/ingresar">Ingresar
        </RouterLink>
      </li>
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/crear-cuenta">Crear cuenta
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>