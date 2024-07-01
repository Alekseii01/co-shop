export const loadFilterForm = (): string => `
    <form class="filters" id="board-filters">
        <div class="filters_header">
            <div class="body-1 font-700">Filters</div>
            <i class="fas fa-sliders" id="filter-close"></i>
        </div>
        <div class="route-line description"><span class="line"></span></div>
        <div class="filters_options">
            <div class="body-1 font-700">Brands</div>
            <div class="filters_options_types">
                <input type="checkbox" id="ascending" name="brand" value="Ascending">
                <label for="ascending">Ascending</label>
                <input type="checkbox" id="descending" name="brand" value="Descending">
                <label for="descending">Descending</label>
            </div>
        </div>
        <div class="route-line description"><span class="line"></span></div>
        <div class="filters_slider">
            <div class="body-1 font-700">Price</div>
            <div class="range-input">
                <label><input type="number" name="min-price" min="0" max="3000" value="0"></label>
                <span><i style="max-width: 11px; padding: 0 8px; font-size: 0.8em;" class="fa-solid fa-play"></i></span>
                <label><input type="number" name="max-price" min="0" max="3000" value="3000"></label>
            </div>
        </div>
        <div class="filters_buttons">
            <input class="button" type="submit" theme="dark" id="filter-apply" value="Apply Filter" />
            <input class="button-gray" type="button" theme="gray" id="filter-reset" value="Reset Filter" />
        </div>
    </form>
`;
