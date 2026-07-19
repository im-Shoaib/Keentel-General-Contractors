// inline-editor.config.js
module.exports = {
  // Where to store the editable content (JSON files)
  contentDir: 'content/blog',
  // The route where the editor will be active
  editorRoute: '/admin',
  // Enable image uploads (optional)
  images: {
    uploadDir: 'public/uploads',
    urlPrefix: '/uploads',
  },
};