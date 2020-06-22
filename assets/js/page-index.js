(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "before-you-start.md",
                title: "Section 1: Before You Start",
                url: "/opendoc-postman-guide/before-you-start.html",
                escapedPath: "before-you-start.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "email.md",
                title: "Section 1b. Email",
                url: "/opendoc-postman-guide/email.html",
                escapedPath: "email.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "faq.md",
                title: "Section 4: FAQs",
                url: "/opendoc-postman-guide/faq.html",
                escapedPath: "faq.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-postman-guide/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "poweruser.md",
                title: "Section 3: Power User",
                url: "/opendoc-postman-guide/poweruser.html",
                escapedPath: "poweruser.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "privacy.md",
                title: "Privacy Policy",
                url: "/opendoc-postman-guide/privacy.html",
                escapedPath: "privacy.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "report-bug.md",
                title: "Report Bugs",
                url: "/opendoc-postman-guide/report-bug.html",
                escapedPath: "report-bug.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "step-by-step-guide.md",
                title: "Section 2: Step by Step Guide",
                url: "/opendoc-postman-guide/step-by-step-guide.html",
                escapedPath: "step-by-step-guide.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "t-c.md",
                title: "Terms of Use",
                url: "/opendoc-postman-guide/t-c.html",
                escapedPath: "t-c.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "telegram.md",
                title: "Section 1c. Telegram",
                url: "/opendoc-postman-guide/telegram.html",
                escapedPath: "telegram.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        {
                name: "twilio-sms.md",
                title: "Section 1a: Twilio &amp; SMS",
                url: "/opendoc-postman-guide/twilio-sms.html",
                escapedPath: "twilio-sms.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["A guide to all things Postman.gov.sg","",["before-you-start.md","twilio-sms.md","email.md","telegram.md","step-by-step-guide.md","poweruser.md","faq.md","report-bug.md","privacy.md","t-c.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()