<p class="mt-8 text-center text-xs text-80">
    <a href="{{ config('app.url') }}" class="text-secondary dim no-underline">{{ config('nova.name') }}</a> {{ __('by') }} <a href="https://manageitpro.co.uk" class="text-primary dim no-underline">Manage It Pro Ltd  - Rhys Lees</a> &copy; {{ date('Y') }}<span class="px-1">&middot;</span>
</p>    <p class="mt-1 text-center text-xs text-80">

    {{ __('Theme') }} v{{ \ManageItProLtd\NovaStyling\Theme::version() }}
    <span class="px-1">&middot;</span>
    Laravel Nova v{{ \Laravel\Nova\Nova::version() }}
</p>
{{-- <nova-dark-theme-toggle></nova-dark-theme-toggle> --}}
<nova-dark-theme-toggle label="{{ __('Dark Theme') }}"></nova-dark-theme-toggle>
