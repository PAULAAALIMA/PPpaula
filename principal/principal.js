function toggleFolder(folder) {
    folder.classList.toggle('active');
    var folderContent = folder.querySelector('.folder-content');
    folderContent.style.display = folderContent.style.display === 'block' ? 'none' : 'block';
  }


