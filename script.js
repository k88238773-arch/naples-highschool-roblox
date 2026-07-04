document.addEventListener("DOMContentLoaded", () => {
    // 1. Create a search input dynamically and insert it above the table
    const container = document.querySelector(".container");
    const table = document.querySelector("table");
    
    const searchWrapper = document.createElement("div");
    searchWrapper.style.marginBottom = "20px";
    searchWrapper.style.textAlign = "center";
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search by name, position, or grade...";
    searchInput.style.width = "100%";
    searchInput.style.maxWidth = "400px";
    searchInput.style.padding = "10px 15px";
    searchInput.style.borderRadius = "6px";
    searchInput.style.border = "1px solid #334155";
    searchInput.style.backgroundColor = #1e293b;
    searchInput.style.color = "#f8fafc";
    searchInput.style.fontSize = "16px";
    searchInput.style.outline = "none";
    
    searchWrapper.appendChild(searchInput);
    container.insertBefore(searchWrapper, table);

    // 2. Add real-time filtering logic
    const tableRows = document.querySelectorAll("tbody tr");

    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        tableRows.forEach((row) => {
            // Get text from Name, Position, and Grade columns
            const name = row.cells[2].textContent.toLowerCase();
            const position = row.cells[3].textContent.toLowerCase();
            const grade = row.cells[4].textContent.toLowerCase();

            // If the search term matches any part of those columns, keep it visible
            if (name.includes(searchTerm) || position.includes(searchTerm) || grade.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none"; // Hide rows that don't match
            }
        });
    });
});