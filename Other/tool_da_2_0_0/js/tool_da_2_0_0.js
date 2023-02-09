let tools = document.querySelectorAll('a');
tools.forEach(a => {
    a.addEventListener('click', function () {
        tools.forEach(tool => tool.classList.remove('active'));
        this.classList.add('active');
    });
});