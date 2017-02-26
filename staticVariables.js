const tabTitle = `<!doctype html public "storage">
<html>
    <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap-extended.css">
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <title>`

const closeTitle = `</title>`

const afterTitle = `
    </head>
    <body>
        <header id="header">
            <div class="logo">
                <a href="/"><img src='../images/logo.png'/></a>
            </div>
            <a href="#" class="nav-opener"><span></span></a>
            <nav id="nav">
                <ul class="list-unstyled">
                    <li><a href="../get-a-quote" class="navbarmenu">Life Insurance Quotes</a></li>
                    <li><a href="../resource-center" class="navbarmenu">Resource Center</a></li>
                    <li><a href="../about" class="navbarmenu">About Us</a></li>
                    <li><a href="tel:18009403002" class="mikey">Call Us Now 1-800-940-3002</a></li>
                </ul>
            </nav>
        </header>
        <main id="main" class="container">
            <div class="container">
                <div class="page-head">
                    <div class="holder text-center">
                        <h1>`

const body = `</h1>
                    </div>
                </div>
            </div>
            <div class="content-holder">
                <div id="content">
                    <div class="container">
                        <div class="row success">
                            <div class="col-sm-8 col-sm-offset-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="content-holder">
                    <div class="col-md-3">
                        <div class="thin-mint-left-list">
                        </div>
                    </div>
                    <div class="col-md-6">`

const end = `                    </div>
                </div>
            </div>
        </main>

        <footer id="footer">
            <div class="container">
                <div class="nav">
                    <div class="col">
                        <h2>Get Covered</h2>
                        <ul class="list-unstyled">
                            <li><a href="/get-a-quote">Get a term life insurance quote</a></li>
                            <li><a href="/resource-center/life-insurance">Life Insurance</a></li>
                            <li><a href="/resource-center/life-insurance-101">Life insurance 101</a></li>
                            <li><a href="/resource-center/types-of-life-insurance">Types of Life Insurance</a></li>
                            <li><a href="/resource-center/importance-of-estate-planning">Importance of Estate Planning</a></li>
                            <li><a href="/resource-center/advanced-life-insurance">Advanced life insurance</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>About ReliaQuote</h2>
                        <ul class="list-unstyled">
                            <li><a href="/resource-center/about">About Us</a></li>
                            <li><a href="/resource-center/jobs">Careers</a></li>
                            <li><a href="/resource-center/terms-and-conditions">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>Contact Us</h2>
                        <ul class="list-unstyled">
                            <li><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#114;&#101;&#108;&#105;&#097;&#113;&#117;&#111;&#116;&#101;&#046;&#099;&#111;&#109;">&#105;&#110;&#102;&#111;&#064;&#114;&#101;&#108;&#105;&#097;&#113;&#117;&#111;&#116;&#101;&#046;&#099;&#111;&#109;</a></li>
                            <li><a href="tel:18009403002">1-800-940-3002</a></li>
                            <li>1312 Vincent Place McLean, VA 22101</li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <p>&copy;2017 <Link to="/">ReliaQuote</Link> Insurance Services, LLC All rights reserved</p>
                </div>
            </div>
        </footer>
    </body>
</html>`

const seoData = [
  {
    "slug": "life-insurance-applicant-classification",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/how-is-a-life-insurance-applicant-classified",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/how-is-a-life-insurance-applicant-classified"
  },
  {
    "slug": "level-term-versus-renewable-term-life-insurance",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/level-term-vs-yearly-renewable-term-life-insurance",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/level-term-vs-yearly-renewable-term-life-insurance"
  },
  {
    "slug": "life-insurance-application-process",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-application-process",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-application-process"
  },
  {
    "slug": "life-insurance-higher-rate-than-on-policy",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/rate-higher-than-applied-on-life-insurance-policy",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/rate-higher-than-applied-on-life-insurance-policy"
  },
  {
    "slug": "life-insurane-riders-options-on-policies",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/riders-options-features-on-life-insurance-policies",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/riders-options-features-on-life-insurance-policies"
  },
  {
    "slug": "tax-treatment-of-life-insruance-death-benefits",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/tax-treatment-of-life-insurance-death-benefit-proceeds",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/tax-treatment-of-life-insurance-death-benefit-proceeds"
  },
  {
    "slug": "term-life-insurance-or-permanent-life-insurance",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/term-life-or-permanent-life-insurance",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/term-life-or-permanent-life-insurance"
  },
  {
    "slug": "term-life-insurance-or-permanent-life-insurance-spouse",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/term-life-or-permanent-life-insurance-spouse",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/faq/term-life-or-permanent-life-insurance-spouse"
  },
  {
    "slug": "when-does-life-insurance-coverage-begin",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/when-does-my-life-insurance-coverage-begin",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/when-does-my-life-insurance-coverage-begin"
  },
  {
    "slug": "life-insurance",
    "title": "Life Insurance Quotes and Coverage | ReliaQuote.com",
    "metaDescription": "Get life insurance quotes and coverage from ReliaQuote.com which compares different carriers to get our customers the best rate.",
    "metaKeywords": "life insurance quotes, life insurance coverage, reliaquote.com",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance",
    "ogType": "website",
    "ogTitle": "Life Insurance Quotes and Coverage | ReliaQuote.com",
    "ogDescription": "Get life insurance quotes and coverage from ReliaQuote.com which compares different carriers to get our customers the best rate.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance"
  },
  {
    "slug": "second-to-die-survivorship-life-insurance",
    "title": "Second-to-Die or Survivorship Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/second-to-die-survivorship-life-insurance",
    "ogType": "website",
    "ogTitle": "Second-to-Die or Survivorship Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/second-to-die-survivorship-life-insurance"
  },
  {
    "slug": "universal-life-insurance",
    "title": "Universal Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/universal-life-insurance",
    "ogType": "website",
    "ogTitle": "Universal Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/universal-life-insurance"
  },
  {
    "slug": "variable-life-insurance",
    "title": "Variable Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/variable-life-insurance",
    "ogType": "website",
    "ogTitle": "Variable Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/variable-life-insurance"
  },
  {
    "slug": "variable-universal-life-insurance",
    "title": "Variable Universal Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/variable-universal-life-insurance",
    "ogType": "website",
    "ogTitle": "Variable Universal Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/variable-universal-life-insurance"
  },
  {
    "slug": "whole-life-insurance",
    "title": "Whole Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/whole-life-insurance",
    "ogType": "website",
    "ogTitle": "Whole Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/whole-life-insurance"
  },
  {
    "slug": "term-life-insurance",
    "title": "Free Term Life Insurance Quotes - ReliaQuote Life Insurance Services",
    "metaDescription": "Free term life insurance quotes online from top-rated life insurance companies. Save on low cost term life insurance with ReliaQuote Life Insurance Services.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance agents, free life insurance quotes, life insurance online, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/term-life-insurance",
    "ogType": "website",
    "ogTitle": "Free Term Life Insurance Quotes - ReliaQuote Life Insurance Services",
    "ogDescription": "Free term life insurance quotes online from top-rated life insurance companies. Save on low cost term life insurance with ReliaQuote Life Insurance Services.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/term-life-insurance"
  },
  {
    "slug": "advanced-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/advanced-life-insurance",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/advanced-life-insurance"
  },
  {
    "slug": "buying-life-insurance-on-the-internet",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/buying-life-insurance-on-the-internet",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/buying-life-insurance-on-the-internet"
  },
  {
    "slug": "customer-guide-to-buying-life-insurance",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/customer-guide-to-buying-life-insurance.htm",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/customer-guide-to-buying-life-insurance"
  },
  {
    "slug": "feds-and-life-insurance",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/feds-knocking-on-life-insurance-industry-door",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/feds-knocking-on-life-insurance-industry-door"
  },
  {
    "slug": "life-insurance-underwriting",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-underwriting",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-underwriting"
  },
  {
    "slug": "life-transitions",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/making-your-way-through-life-transitions",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/making-your-way-through-life-transitions"
  },
  {
    "slug": "life-insurance-myths",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/top-five-life-insurance-myths",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/top-five-life-insurance-myths"
  },
  {
    "slug": "life-insurance-scams",
    "title": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/top-five-life-insurance-scams",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Life Insurance Articles",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/top-five-life-insurance-scams"
  },
  {
    "slug": "aig-meltdown",
    "title": "Life Insurance Articles - What AIG Meltdown Means for Policyholders",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-AIG-meltdown-means-for-policyholiders",
    "ogType": "website",
    "ogTitle": "Life Insurance Articles - What AIG Meltdown Means for Policyholders",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-AIG-meltdown-means-for-policyholiders"
  },
  {
    "slug": "irrevocable-life-insurance-trust",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/basics-of-irrevocable-life-insurance-trust",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/basics-of-irrevocable-life-insurance-trust"
  },
  {
    "slug": "beneficiary-designations",
    "title": "Life 101 - Beneficiary designations",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/beneficiary-designations",
    "ogType": "website",
    "ogTitle": "Life 101 - Beneficiary designations",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/beneficiary-designations"
  },
  {
    "slug": "determining-life-insurance-needs",
    "title": "Life 101 - Determining Your Life Insurance Needs",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/determining-life-insurance-needs",
    "ogType": "website",
    "ogTitle": "Life 101 - Determining Your Life Insurance Needs",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/determining-life-insurance-needs"
  },
  {
    "slug": "estate-planning-and-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/estate-planning-and-life-insurance",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/estate-planning-and-life-insurance"
  },
  {
    "slug": "estate-tax",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/funding-the-estate-tax",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/funding-the-estate-tax"
  },
  {
    "slug": "buy-and-sell-agreement-funded-by-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/how-does-buy-sell-agreement-funded-by-life-insurance",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/how-does-buy-sell-agreement-funded-by-life-insurance"
  },
  {
    "slug": "key-person-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/how-do-you-set-up-key-person-life-insurance",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/how-do-you-set-up-key-person-life-insurance"
  },
  {
    "slug": "life-insurance-tax-free",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/how-to-make-life-insurance-tax-free",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/how-to-make-life-insurance-tax-free"
  },
  {
    "slug": "customer-comments",
    "title": "About ReliaQuote Life Insurance Services - Customer Comments",
    "metaDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/customer_comments",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Customer Comments",
    "ogDescription": "Read comments from our customers and see why ReliaQuote is a leading life insurance company. ReliaQuote customers have saved up to 70% on term life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/customer_comments"
  },
  {
    "slug": "feedback",
    "title": "About ReliaQuote Life Insurance Services - Contact ReliaQuote",
    "metaDescription": "Contact ReliaQuote for your life insurance needs. Get free term life insurance quotes and apply for a life insurance policy online.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/feedback",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Contact ReliaQuote",
    "ogDescription": "Contact ReliaQuote for your life insurance needs. Get free term life insurance quotes and apply for a life insurance policy online.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/feedback"
  },
  {
    "slug": "jobs",
    "title": "Jobs Available at ReliaQuote Life Insurance Services",
    "metaDescription": "See jobs available at ReliaQuote Life Insurance Services, an award winning life insurance service provider.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/jobs",
    "ogType": "website",
    "ogTitle": "Jobs Available at ReliaQuote Life Insurance Services",
    "ogDescription": "See jobs available at ReliaQuote Life Insurance Services, an award winning life insurance service provider.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/jobs"
  },
  {
    "slug": "legal",
    "title": "ReliaQuote Life Insurance Services - Legal Disclaimers",
    "metaDescription": "Legal disclaimers for ReliaQuote Life Insurance Services website, an award winning life insurance service provider.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/disclaimer",
    "ogType": "website",
    "ogTitle": "ReliaQuote Life Insurance Services - Legal Disclaimers",
    "ogDescription": "Legal disclaimers for ReliaQuote Life Insurance Services website, an award winning life insurance service provider.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/disclaimer"
  },
  {
    "slug": "life-insurance-101",
    "title": "Term Life Insurance Information - ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-101",
    "ogType": "website",
    "ogTitle": "Term Life Insurance Information - ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-101"
  },
  {
    "slug": "life-insurance-faq",
    "title": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "metaDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, life insurance information, low cost life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/faq",
    "ogType": "website",
    "ogTitle": "FAQ's: Information on Life Insurance | ReliaQuote Life Insurance Services",
    "ogDescription": "Get answers to FAQ's on life insurance information, such as buying term life insurance and advantages of term life insurance on ReliaQuote Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/faq"
  },
  {
    "slug": "term-life-insurance-road-of-life",
    "title": "Life Insurance Needs During Life Events | ReliaQuote.com",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/the-road-of-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs During Life Events | ReliaQuote.com",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/the-road-of-life"
  },
  {
    "slug": "why-use-reliaquote",
    "title": "About ReliaQuote Life Insurance Services - Why Use ReliaQuote",
    "metaDescription": "Top reasons for using ReliaQuote when shopping for life insurance: top rated, low cost life insurance, commitment to values, free life insurance quotes and resources on life insurance information.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/why-use-reliaquote",
    "ogType": "website",
    "ogTitle": "About ReliaQuote Life Insurance Services - Why Use ReliaQuote",
    "ogDescription": "Top reasons for using ReliaQuote when shopping for life insurance: top rated, low cost life insurance, commitment to values, free life insurance quotes and resources on life insurance information.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/why-use-reliaquote"
  },
  {
    "slug": "insurance-needs-when-a-child-leaves-home",
    "title": "Life Insurance Needs When a Child Leaves Home",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-a-child-leaves-home",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When a Child Leaves Home",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-a-child-leaves-home"
  },
  {
    "slug": "insurance-needs-when-becoming-a-parent",
    "title": "Life Insurance Needs When Becoming a Parent",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-becoming-a-parent",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Becoming a Parent",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-becoming-a-parent"
  },
  {
    "slug": "insurance-needs-when-buying-a-car",
    "title": "Life Insurance Needs During Life Events | ReliaQuote.com",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-buying-a-car",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs During Life Events | ReliaQuote.com",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-buying-a-car"
  },
  {
    "slug": "insurance-needs-when-buying-a-home",
    "title": "Life Insurance Needs When Buying a New Home",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center//insurance-needs-when-buying-a-new-home",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Buying a New Home",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center//insurance-needs-when-buying-a-new-home"
  },
  {
    "slug": "insurance-needs-when-you-get-a-divorce",
    "title": "Life Insurance Needs When Getting a Divorce",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-getting-a-divorce",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Getting a Divorce",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-getting-a-divorce"
  },
  {
    "slug": "insurance-needs-when-you-get-married",
    "title": "Life Insurance Needs When Getting Married",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-getting-married",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Getting Married",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-getting-married"
  },
  {
    "slug": "insurance-needs-when-loosing-a-loved-one",
    "title": "Life Insurance Needs When Losing a Loved One",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-losing-a-loved-one",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Losing a Loved One",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-losing-a-loved-one"
  },
  {
    "slug": "insurance-needs-when-planning-for-retirement",
    "title": "Life Insurance Needs When Preparing for Retirement",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-planning-for-retirement",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Preparing for Retirement",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-planning-for-retirement"
  },
  {
    "slug": "insurance-needs-when-renting-a-home",
    "title": "Life Insurance Needs When Renting a Home",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-renting-a-home",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Renting a Home",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-renting-a-home"
  },
  {
    "slug": "insurance-needs-when-starting-a-new-job",
    "title": "Life Insurance Needs When Starting a Job",
    "metaDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, mortgage life insurance",
    "ogUrl": "https://www.reliaquote.com/resource-center/insurance-needs-when-starting-a-new-job",
    "ogType": "website",
    "ogTitle": "Life Insurance Needs When Starting a Job",
    "ogDescription": "ReliaQuote Life Insurance Services | See when you need life insurance during various life events, such as getting married, buying a home and planning for retirement.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/insurance-needs-when-starting-a-new-job"
  },
  {
    "slug": "irs-2035",
    "title": "Advanced Life Insurance - IRC Section 2035",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/IRS-section-2035",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance - IRC Section 2035",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/IRS-section-2035"
  },
  {
    "slug": "irs-6166",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/IRS-section-6166",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/IRS-section-6166"
  },
  {
    "slug": "life-insurance-companies",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies"
  },
  {
    "slug": "american-general-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/american-general-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/american-general-life"
  },
  {
    "slug": "banner-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/banner-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/banner-life"
  },
  {
    "slug": "genworth-life-and-annuity",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/genworth-life-and-annuity",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/genworth-life-and-annuity"
  },
  {
    "slug": "genworth-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/genworth-life-insurance",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/genworth-life-insurance"
  },
  {
    "slug": "ing-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/ing-life-insurance",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/ing-life-insurance"
  },
  {
    "slug": "licoln-life-and-annuity-of-ny",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/lincoln-life-and-annuity-of-ny",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/lincoln-life-and-annuity-of-ny"
  },
  {
    "slug": "lincoln-national-life",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/lincoln-national-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/lincoln-national-life"
  },
  {
    "slug": "ohio-national-life",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/ohio-national",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/ohio-national"
  },
  {
    "slug": "protective-life-and-annuity",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/protective-life-and-annuity",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/protective-life-and-annuity"
  },
  {
    "slug": "prudential-financial-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/prudential-financial",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/prudential-financial"
  },
  {
    "slug": "rbc-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/rbc-insurance",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/rbc-insurance"
  },
  {
    "slug": "sbli-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/sbli",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/sbli"
  },
  {
    "slug": "transamerica-financial-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/transamerica-financial-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/transamerica-financial-life"
  },
  {
    "slug": "united-states-life-insurance",
    "title": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/united-states-life-insurance",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary | ReliaQuote Life Insurance Services",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/united-states-life-insurance"
  },
  {
    "slug": "william-penn-life-insurance",
    "title": "Life Insurance Glossary ? William Penn Life Insurance",
    "metaDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance quotes, term life insurance quotes, low cost life insurance, life insurance company, life insurance companies",
    "ogUrl": "https://www.reliaquote.com/resource-center/life-insurance-companies/william-penn-life",
    "ogType": "website",
    "ogTitle": "Life Insurance Glossary ? William Penn Life Insurance",
    "ogDescription": "Get definitions of commonly used terminology in life insurance on ReliaQuote Life Insurance Services website.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/life-insurance-companies/william-penn-life"
  },
  {
    "slug": "return-of-premium-life-insurance",
    "title": "What is Return of Premium (ROP) Term Life Insurance Policy?",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/return-of-premium-term-life-insurance",
    "ogType": "website",
    "ogTitle": "What is Return of Premium (ROP) Term Life Insurance Policy?",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/return-of-premium-term-life-insurance"
  },
  {
    "slug": "settlement-options",
    "title": "Life 101 - Settlement options",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/settlement-options",
    "ogType": "website",
    "ogTitle": "Life 101 - Settlement options",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/settlement-options"
  },
  {
    "slug": "split-dollar-irrevocable-life-insurance-trust",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/split-dollar-in-irrevocable-life-insurance-trust",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/split-dollar-in-irrevocable-life-insurance-trust"
  },
  {
    "slug": "the-charitable-deduction-life-insurance",
    "title": "Advanced Life Insurance - The Charitable Deduction",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/the-charitable-deduction",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance - The Charitable Deduction",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/the-charitable-deduction"
  },
  {
    "slug": "importance-of-estate-planning",
    "title": "Advanced Life Insurance ? Importance of Estate Planning",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/the-importance-of-estate-planning-at-any-age",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance ? Importance of Estate Planning",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/the-importance-of-estate-planning-at-any-age"
  },
  {
    "slug": "the-martial-deduction-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/the-marital-deduction",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/the-marital-deduction"
  },
  {
    "slug": "types-of-life-insurance",
    "title": "Life 101 - Types of Life Insurance",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/types-of-life-insurance",
    "ogType": "website",
    "ogTitle": "Life 101 - Types of Life Insurance",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/types-of-life-insurance"
  },
  {
    "slug": "life-insurance-uses",
    "title": "Life 101 - What are the Uses of Life Insurance?",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/uses-of-life-insurance",
    "ogType": "website",
    "ogTitle": "Life 101 - What are the Uses of Life Insurance?",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/uses-of-life-insurance"
  },
  {
    "slug": "what-is-a-buy-sell-agreement-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-a-buy-sell-agreement",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-a-buy-sell-agreement"
  },
  {
    "slug": "what-is-an-irrevocable-trust-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-an-irrevocable-trust",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-an-irrevocable-trust"
  },
  {
    "slug": "what-is-a-trust-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-a-trust",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-a-trust"
  },
  {
    "slug": "what-is-a-will-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-a-will",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-a-will"
  },
  {
    "slug": "what-is-estate-planning-life-insurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-estate-planning",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-estate-planning"
  },
  {
    "slug": "what-is-a-key-person-life-isnurance",
    "title": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "metaDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-key-person-life-insurance",
    "ogType": "website",
    "ogTitle": "Advanced Life Insurance Information | ReliaQuote Life Insurance Services",
    "ogDescription": "ReliaQuote | Read advanced term life insurance information, such as estate planning and life insurance and business uses of life insurance.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-key-person-life-insurance"
  },
  {
    "slug": "what-is-life-insurance",
    "title": "Life 101 - What is life insurance?",
    "metaDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "metaKeywords": "reliaquote, life insurance, term life insurance, life insurance information, life insurance quotes, term life insurance quotes",
    "ogUrl": "https://www.reliaquote.com/resource-center/what-is-life-insurance",
    "ogType": "website",
    "ogTitle": "Life 101 - What is life insurance?",
    "ogDescription": "ReliaQuote | Comprehensive life insurance information, including definition of term life insurance, benefits of life insurance and determining your life insurance needs.",
    "canonicalTag": "https://www.reliaquote.com/resource-center/what-is-life-insurance"
  }
]

module.exports.tabTitle = tabTitle;
module.exports.closeTitle = closeTitle;
module.exports.afterTitle = afterTitle;
module.exports.body = body;
module.exports.end = end;
module.exports.seoData = seoData;
