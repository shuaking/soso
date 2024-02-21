document.addEventListener('DOMContentLoaded', function() {
    // 使用JSON结构定义网站信息
    const websitesJSON = [
        {
            "name": "Google",
            "actionUrl": "https://www.google.com/search",
            "queryParam": "q"
        },
        {
            "name": "Bing",
            "actionUrl": "https://www.bing.com/search",
            "queryParam": "q"
        },
        {
            "name": "Yahoo",
            "actionUrl": "https://search.yahoo.com/search",
            "queryParam": "p"
        }
        // 在此处添加更多网站信息
    ];

    // 函数：根据网站信息添加搜索表单
    function addSearchForm(website) {
        const container = document.getElementById('additional-section'); // 获取存放表单的容器

        // 创建表单元素
        const form = document.createElement('form');
        form.setAttribute('action', website.actionUrl);
        form.setAttribute('method', 'get');
        form.setAttribute('target', '_blank');

        // 创建标签
        const label = document.createElement('label');
        label.textContent = website.name + " 搜索：";

        // 创建文本输入框
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('name', website.queryParam);

        // 创建提交按钮
        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('value', '搜索');

        // 将元素添加到表单中
        form.appendChild(label);
        form.appendChild(inputText);
        form.appendChild(submitButton);

        // 将表单添加到页面上
        container.appendChild(form);
    }

    // 遍历定义的网站JSON数组，并为每个网站添加搜索表单
    websitesJSON.forEach(function(website) {
        addSearchForm(website);
    });
});
