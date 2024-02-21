document.addEventListener('DOMContentLoaded', function() {
    // 示例函数，用于添加一个新的搜索表单
    function addSearchEngine(name, actionUrl, queryParam) {
        const section = document.getElementById('additional-section');
        const form = document.createElement('form');
        form.action = actionUrl;
        form.method = 'get';
        form.target = '_blank';
        
        const label = document.createElement('label');
        label.textContent = name + '搜索：';
        
        const inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.name = queryParam;
        
        const submitBtn = document.createElement('input');
        submitBtn.type = 'submit';
        submitBtn.value = '搜索';
        
        form.appendChild(label);
        form.appendChild(inputText);
        form.appendChild(submitBtn);
        
        section.appendChild(form);
    }
    
    // 调用函数来添加新的搜索表单，例如：
    // addSearchEngine('DuckDuckGo', 'https://duckduckgo.com/', 'q');
});
