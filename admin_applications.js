document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".status-dropdown");

    dropdowns.forEach(dropdown => {
        updateRowColor(dropdown);
        dropdown.addEventListener("change", function () {
            updateRowColor(this);
        });
    });

    function updateRowColor(dropdown) {
        let row = dropdown.closest("tr");
        let value = dropdown.value;

        row.style.backgroundColor = value === "approved" ? "#c6e6c1" :
                                    value === "pending" ? "#eee8b2" :
                                    value === "rejected" ? "#c18d52" :
                                    "#b3d9ff"; // In-progress (default blue)
    }
});