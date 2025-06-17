function tampilkanLab() {
  const labContent = document.getElementById("lab-content");
  labContent.classList.toggle("hidden");
}

// Upload file dan tampilkan link langsung
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Buat link sementara untuk membuka file
    link.href = URL.createObjectURL(file);
    link.textContent = file.name;
    link.download = file.name;
    link.target = "_blank";

    listItem.appendChild(link);
    document.getElementById("uploadedFiles").appendChild(listItem);

    fileInput.value = ""; // reset input
  } else {
    alert("Silakan pilih file terlebih dahulu.");
  }
});
