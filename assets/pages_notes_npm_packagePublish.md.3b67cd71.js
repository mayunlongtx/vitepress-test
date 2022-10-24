import{_ as s,c as a,o as n,d as p}from"./app.0c40e341.js";const F=JSON.parse('{"title":"npm \u5305\u53D1\u5E03\u8FC7\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8D26\u53F7","slug":"\u8D26\u53F7"},{"level":2,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":2,"title":"\u521D\u59CB\u5316\u9879\u76EE","slug":"\u521D\u59CB\u5316\u9879\u76EE"},{"level":2,"title":"\u4FEE\u6539 package.json","slug":"\u4FEE\u6539-package-json"},{"level":2,"title":"\u68C0\u6D4B npm \u6E90","slug":"\u68C0\u6D4B-npm-\u6E90"},{"level":2,"title":"\u767B\u5F55npm","slug":"\u767B\u5F55npm"},{"level":2,"title":"\u53D1\u5E03","slug":"\u53D1\u5E03"},{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898"}],"relativePath":"pages/notes/npm/packagePublish.md"}'),l={name:"pages/notes/npm/packagePublish.md"},e=p(`<h1 id="npm-\u5305\u53D1\u5E03\u8FC7\u7A0B" tabindex="-1">npm \u5305\u53D1\u5E03\u8FC7\u7A0B <a class="header-anchor" href="#npm-\u5305\u53D1\u5E03\u8FC7\u7A0B" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="./npmCommand.html">npm \u5E38\u7528\u547D\u4EE4</a></p></div><h2 id="\u8D26\u53F7" tabindex="-1">\u8D26\u53F7 <a class="header-anchor" href="#\u8D26\u53F7" aria-hidden="true">#</a></h2><ul><li>\u524D\u5F80 <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a> \u5B98\u7F51\u521B\u5EFA\u81EA\u5DF1\u7684\u8D26\u53F7</li><li>\u79C1\u6709\u5305\u53EF\u4EE5\u67E5\u770B<a href="./privateNpm.html#\u7528\u6237\u7BA1\u7406">\u7528\u6237\u7BA1\u7406</a></li></ul><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir nec </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> cd nec</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4FEE\u6539-package-json" tabindex="-1">\u4FEE\u6539 package.json <a class="header-anchor" href="#\u4FEE\u6539-package-json" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@your-name/nec</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u8FD9\u91CC\u7684@your-name\u4E00\u5B9A\u8981\u548Cauthor\u7684\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5305\u7248\u672C,\u53D1\u5E03\u524D\u9700\u8981\u4FEE\u6539\u6B64\u7248\u672C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">directories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lib</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">Error: no test specified</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> &amp;&amp; exit 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@your-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u68C0\u6D4B-npm-\u6E90" tabindex="-1">\u68C0\u6D4B npm \u6E90 <a class="header-anchor" href="#\u68C0\u6D4B-npm-\u6E90" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set registry</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5982\u679C\u662F\u6DD8\u5B9D\u6E90\u5219\u9700\u8981\u8BBE\u7F6E\u56DE npm \u6E90</p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set registry </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//registry.npmjs.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u767B\u5F55npm" tabindex="-1">\u767B\u5F55npm <a class="header-anchor" href="#\u767B\u5F55npm" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8FDB\u5165\u5230\u7EC8\u7AEF</p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm adduser </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53D1\u5E03" tabindex="-1">\u53D1\u5E03 <a class="header-anchor" href="#\u53D1\u5E03" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u8FD9\u4E2A\u5F53\u4F60\u7684\u5305\u540D\u4E3A@your-name/your-package\u65F6\uFF0Cnpm publish\u4F1A\u9ED8\u8BA4\u53D1\u5E03\u4E3A\u79C1\u6709\u5305\uFF0C\u4F46\u662F npm \u7684\u79C1\u6709\u5305\u9700\u8981\u4ED8\u8D39\uFF0C\u6240\u4EE5\u9700\u8981\u6DFB\u52A0\u5982\u4E0B\u53C2\u6570\u8FDB\u884C\u53D1\u5E03:</p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm publish </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">access public</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>402 You must sign up for private packages</p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//@youe-name\u5F00\u5934\u4F1A\u88AB\u8BA4\u4E3A\u662F\u53D1\u5E03\u79C1\u6709\u5305 \u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u5F00\u653E\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">access public</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>403 \u8FD9\u4E2A\u662F\u4F60\u7684\u6E90\u8BBE\u7F6E\u6210\u7B2C\u4E09\u65B9\u6E90\u7684\u65F6\u5019\u624D\u6709\u53EF\u80FD\u53D1\u751F</p></div><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm config set registry </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//registry.npmjs.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>403 \u4E5F\u53EF\u80FD\u662F\u4F60\u91CD\u540D,\u9700\u8981\u4F60\u4FEE\u6539\u4E00\u4E0B\u5305\u540D\u79F0 \u91CD\u65B0\u4E0A\u4F20</p></div>`,27),o=[e];function c(r,t,i,y,D,u){return n(),a("div",null,o)}var m=s(l,[["render",c]]);export{F as __pageData,m as default};