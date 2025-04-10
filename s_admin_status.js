document.addEventListener("DOMContentLoaded", function () {
    const statusDropdowns = document.querySelectorAll(".status-dropdown");

    statusDropdowns.forEach(dropdown => {
        const trackingId = dropdown.closest("tr").querySelector("td:nth-child(3)").innerText;
        const savedStatus = localStorage.getItem(`status_${trackingId}`);

        if (savedStatus) {
            dropdown.value = savedStatus;
        }

        dropdown.addEventListener("change", function () {
            localStorage.setItem(`status_${trackingId}`, this.value);
            alert("Status updated successfully!");
        });
    });
});
