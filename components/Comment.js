export default function Comment(comment) {
  const hasComments = comment.comments.length > 0;

  return `
      <div class="nested-comments-${comment.level}">
        <p class="comment-header">
          ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content}
        ${
          hasComments
            ? comment.comments.map((comment) => Comment(comment)).join('')
            : ''
        }
      </div>
    `;
}
