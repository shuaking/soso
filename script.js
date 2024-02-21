document.addEventListener('DOMContentLoaded', function() {
    // 函数：从外部文件加载JSON数据
    async function loadWebsites() {
        try {
            const response = await fetch('websites.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const websites = await response.json();

            // 加载完成后，为每个网站添加搜索表单
            websites.forEach(addSearchForm);
        } catch (error) {
            console.error("加载网站信息失败:", error);
        }
    }

    // 函数：根据网站信息添加搜索表单
    function addSearchForm(website) {
        const container = document.getElementById('additional-section');

        // 创建表单、标签、输入框和按钮等元素
        // 代码省略，与之前相同

        container.appendChild(form);
    }

    // 加载并处理JSON数据
    loadWebsites();
});
