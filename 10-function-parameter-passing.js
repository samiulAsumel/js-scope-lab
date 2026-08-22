const bookTitle = 'Clean Code';
const isAvailable = true;

function printBookStatus(title, available) {
  console.log(title, '- available:', available);
}

// title/available exist only inside printBookStatus; passing bookTitle and
// isAvailable here is what makes them reachable, not the outer const names.
printBookStatus(bookTitle, isAvailable);
