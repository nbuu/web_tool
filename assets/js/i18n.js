var i18nData = {
    en: {
        // Sidebar
        common_tools: "Common Tools",
        research_office: "Research & Office",
        bio_info: "Bioinformatics",
        cloud_server: "Cloud Servers",
        office_study: "Office & Study",
        entertainment: "Entertainment",
        video_audio: "Video & Audio",
        gaming: "Gaming",
        resources: "Resources",
        cloud_drive: "Cloud Drives",
        icon_assets: "Icon Assets",
        icon_design: "Icon Design",
        graphic_assets: "Graphic Assets",
        font_resources: "Font Resources",
        ppt_resources: "PPT Resources",
        dev_design: "Dev & Design",
        graphic_creative: "Graphic Creative",
        ui_design: "UI Design",
        online_color: "Online Color",
        mini_tools: "Mini Tools",
        chrome_plugins: "Chrome Plugins",
        news_study: "News & Study",
        news_books: "News & Books",
        blog_forum: "Blog & Forum",
        design_spec: "Design Spec",
        video_tutorial: "Video Tutorials",
        // Top Websites (new sections)
        search_portals: "Search & Portals",
        social_community: "Social & Community",
        news_media: "News & Media",
        productivity: "Productivity & Collaboration",
        developer_tools: "Developer Tools",
        cloud_hosting: "Cloud & Hosting",
        ai_ml: "AI & Machine Learning",
        education: "Education & Learning",
        video_streaming: "Video & Streaming",
        ecommerce: "E-Commerce & Shopping",
        communication: "Communication & Email",
        reference: "Reference & Knowledge",
        // Nav
        home: "Home",
        about: "About",
        submit_site: "Submit Site",
        friend_links: "Friend Links",
        about_nav: "About",
        // Search
        search_placeholder: "Enter keywords to search",
        search_common: "Common",
        search_search: "Search",
        search_tools: "Tools",
        search_community: "Community",
        search_life: "Life",
        search_jobs: "Jobs",
        // Footer
        footer_text: "Content sourced from the internet. Contact kefu308@gmail.com for removal requests.",
        footer_copyright: "By Web_tool",
        // Dark mode
        day_mode: "Day Mode",
        night_mode: "Night Mode",
        // Hitokoto
        hitokoto_text: "A random quote will appear here.",
        // Language
        lang_en: "EN",
        lang_zh: "中文",
        // Top Websites sidebar parent
        top_websites: "Top Websites"
    },
    zh: {
        common_tools: "常用工具",
        research_office: "科研办公",
        bio_info: "生物信息",
        cloud_server: "云服务器",
        office_study: "办公学习",
        entertainment: "悠闲娱乐",
        video_audio: "影音视频",
        gaming: "游戏竞技",
        resources: "素材资源",
        cloud_drive: "网盘资源",
        icon_assets: "图标素材",
        icon_design: "图标设计",
        graphic_assets: "平面素材",
        font_resources: "字体资源",
        ppt_resources: "PPT资源",
        dev_design: "开发设计",
        graphic_creative: "图形创意",
        ui_design: "界面设计",
        online_color: "在线配色",
        mini_tools: "迷你工具",
        chrome_plugins: "谷歌插件",
        news_study: "资讯学习",
        news_books: "资讯图书",
        blog_forum: "博客论坛",
        design_spec: "设计规范",
        video_tutorial: "视频教程",
        search_portals: "搜索门户",
        social_community: "社交社区",
        news_media: "新闻媒体",
        productivity: "生产力协作",
        developer_tools: "开发工具",
        cloud_hosting: "云计算托管",
        ai_ml: "AI与机器学习",
        education: "教育学习",
        video_streaming: "视频流媒体",
        ecommerce: "电子商务",
        communication: "通讯邮件",
        reference: "参考知识库",
        home: "首页",
        about: "关于",
        submit_site: "网站提交",
        friend_links: "友情链接",
        about_nav: "关于导航",
        search_placeholder: "输入关键字搜索",
        search_common: "常用",
        search_search: "搜索",
        search_tools: "工具",
        search_community: "社区",
        search_life: "生活",
        search_jobs: "求职",
        footer_text: "本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：kefu308@gmail.com",
        footer_copyright: "By Web_tool",
        day_mode: "日间模式",
        night_mode: "夜间模式",
        hitokoto_text: "每日一言，点击查看详情。",
        lang_en: "EN",
        lang_zh: "中文",
        top_websites: "热门网站"
    }
};

function setLang(lang) {
    if (!i18nData[lang]) lang = 'en';
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    var dict = i18nData[lang];
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            els[i].textContent = dict[key];
        }
    }

    // Update placeholder
    var searchInput = document.getElementById('search-text');
    if (searchInput && dict['search_placeholder']) {
        searchInput.placeholder = dict['search_placeholder'];
    }

    // Update active language button
    var btns = document.querySelectorAll('.lang-switch .lang-btn');
    for (var j = 0; j < btns.length; j++) {
        btns[j].classList.toggle('active', btns[j].getAttribute('data-lang') === lang);
    }
}

function initLang() {
    var lang = localStorage.getItem('lang') || 'en';
    setLang(lang);
}

document.addEventListener('DOMContentLoaded', initLang);
