function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const year = date.getFullYear();
  
    const suffix = getDaySuffix(day);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  
    return `${monthName} ${day}${suffix}, ${year}`;
}
  
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    const lastDigit = day % 10;
    switch (lastDigit) {
        case 1:
        return 'st';
        case 2:
        return 'nd';
        case 3:
        return 'rd';
        default:
        return 'th';
    }
}

function formatAuthorName(author) {
    // Capitalize first letter of each name
    const names = author.split(" ");
    const formattedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    return formattedNames.join(" ");
}

function formatDesc(desc) {
    // Truncate description to 100 characters
    return desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
}

function formatPrice(price) {
    // In Indonesian Rupiah
    return `Rp.${price.toLocaleString("id-ID")}`;
}

export { formatDate, formatAuthorName, formatDesc, formatPrice };