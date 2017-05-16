export let technologies = {
    'html': 'HTML',
    'css': 'CSS',
    'js': 'JavaScript',
    'angular': 'Angular',
    'react': 'React',
    'vue': 'Vue'
}

export default function (techAbbr) {
    return technologies[techAbbr] || null
}