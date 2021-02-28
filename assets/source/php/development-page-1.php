<style>
  @import url('../../styles/mui-styles/mui-flex-spoiler.css');
  @import url('../../styles/mui-styles/mui-flex-text.css');
  @import url('../../styles/mui-styles/mui-flex-directions.css');
  @import url('../../styles/mui-styles/mui-flex-custom.css');
  @import url('../../styles/mui-styles/mui-flex-decorations.css');

  code[mui-flex-code] {
    font-size: 13px;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="symbol"] {
    color: #ACBBBB;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="text"] {
    color: #e8e8e8;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="attr"] {
    color: #99e22e;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="value"],
  code[mui-flex-code][mui-color="dark"]>[mui-code="string"] {
    color: #e6db74;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="argument"] {
    color: #fd771d;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="operator"],
  code[mui-flex-code][mui-color="dark"]>[mui-code="tag"] {
    color: #D82158;
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="variable"],
  code[mui-flex-code][mui-color="dark"]>[mui-code="function"] {
    color: #60c5d8;
    /* color: #58b5c6; */
  }

  code[mui-flex-code][mui-color="dark"]>[mui-code="number"],
  code[mui-flex-code][mui-color="dark"]>[mui-code="boolean"] {
    color: #936fd4;
  }





  code[mui-flex-code][mui-color="light"]>[mui-code="symbol"],
  code[mui-flex-code][mui-color="light"]>[mui-code="text"] {
    color: #333;
    font-weight: bold;
  }



  code[mui-flex-code][mui-color="light"]>[mui-code="attr"] {
    color: #D82158;
    font-weight: bold;
  }

  code[mui-flex-code][mui-color="light"]>[mui-code="value"],
  code[mui-flex-code][mui-color="light"]>[mui-code="string"] {
    color: #008000;
    font-weight: bold;
  }

  code[mui-flex-code][mui-color="light"]>[mui-code="argument"] {
    color: #fd771d;
    font-weight: bold;
  }

  code[mui-flex-code][mui-color="light"]>[mui-code="function"] {
    color: #000080;
    font-weight: bold;
  }

  code[mui-flex-code][mui-color="light"]>[mui-code="tag"] {
    color: #000080;
    font-weight: bold;
  }




  code.preview {
    font-family: 'Gayathri', sans-serif;
    /* background: rgba(255, 221, 45, 0.32); */
    background: rgba(237, 237, 237, 1.0);
    padding: 10px;
    letter-spacing: 1px;
    /* color: rgba(224, 30, 90, 1.0); */
    color: rgba(224, 30, 90, 0.8);
    border: 1px solid rgba(211, 211, 211, 1.0);
    border-radius: 4px;
    width: 45%;
  }


  /*
Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/
*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #23241f;
  }

  .hljs,
  .hljs-tag,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-strong,
  .hljs-emphasis {
    color: #a8a8a2;
  }

  .hljs-bullet,
  .hljs-quote,
  .hljs-number,
  .hljs-regexp,
  .hljs-literal,
  .hljs-link {
    color: #ae81ff;
  }

  .hljs-code,
  .hljs-title,
  .hljs-section,
  .hljs-selector-class {
    color: #a6e22e;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }


  .hljs-selector-tag,
  .hljs-name,
  .hljs-attr {
    color: #f92672;
  }

  .hljs-keyword {
    color: #fd771d;
  }

  .hljs-symbol,
  .hljs-attribute {
    color: #66d9ef;
  }

  .hljs-function>.hljs-keyword {
    color: #60c5d8 !important;
  }

  .hljs-params,
  .hljs-class .hljs-title {
    color: #f8f8f2;
  }

  .hljs-string,
  .hljs-type,
  .hljs-builtin-name,
  .hljs-selector-id,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-variable {
    color: #e6db74;
  }

  .hljs-built_in {
    color: #60c5d8;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-meta {
    color: #75715e;
  }
</style>

<script src="../../scripts/mui-scripts/mui-spoiler-script.js"></script>
<script>


</script>

<title>
  Страница 1
</title>



<div mui-flex-direction="vertical" style="margin: 0px 10px;">

  <!-- Спойлер -->
  <div mui-flex-direction="vertical" mui-card-box id="preview_spoiler_component">
    <div mui-flex-direction="horizontal" class="middle">
      <span mui-flex-text="large" family="Quicksand" class="text-bold" style="margin:0; margin-right: 10px;">
        Спойлер
      </span>
      <div mui-flex-icon="small" style="max-width: 24px; max-height: 24px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
          <path d="M10 13c1.7 2.2 4.8 2.7 7 1 .2-.1.4-.3.5-.5l2-2c1.9-2 1.8-5.2-.2-7.1-1.9-1.9-5-1.9-6.9 0l-.7.7M14 11c-1.7-2.2-4.8-2.7-7-1-.2.1-.4.3-.5.5l-2 2c-1.9 2-1.8 5.2.2 7.1 1.9 1.9 5 1.9 6.9 0l.7-.7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
    <span mui-flex-text="normal" family="Quicksand" class="text-bold">
      Описание
    </span>

    <pre mui-flex-preview style="position:relative;"><code mui-flex-code mui-color="light" style="font-size: 15px;"><span mui-code="function">@mui-flex-spoiler</span> - <i>селектор для работы. Обязателен к добавлению</i>
<span mui-code="function">@data-size</span> - <i>предположительный размер спойлера. Если не указан, то по умолчанию будет 100%</i>
<span mui-code="function">@data-title</span> - <i>то что будет в заголовоке, может быть чем угодно. Поддерживает формат html, как в примере</i>
<span mui-code="function">@active</span> - <i>проставлять, если нужно чтобы спойлер был по умолчанию открыт.</i>
<span mui-code="function">@data-color</span> - <i>меняет цвет заднего фона заголовка спойлера</i>
<span mui-code="function">@data-margin</span> - <i>устанавливает отступы для спойлера</i></code></pre>

    <div mui-flex-direction="vertical">
      <span mui-flex-text="normal" family="Quicksand" class="text-bold">
        Библиотеки
      </span>
      <pre mui-flex-preview style="position:relative;"><code mui-flex-code mui-color="light"><span class="text-bold" mui-code="symbol">css : </span> <span mui-code="function">@import</span> <span mui-code="symbol">url</span><span mui-code="symbol">(</span><span mui-code="value">'/departments/processes/test/m.v.grigoryev/monitoring/styles/mui-styles/mui-library.css'</span><span mui-code="symbol">);</span>
<span class="text-bold" mui-code="symbol">javaScript :</span> <span mui-code="symbol"><</span><span mui-code="tag">script</span> <span mui-code="attr">src</span><span mui-code="symbol">=</span><span mui-code="value">"/departments/processes/test/m.v.grigoryev/monitoring/scripts/mui-scripts/mui-spoiler-script.js"</span><span mui-code="symbol">></span></script></code></pre>



    </div>

    <div mui-flex-direction="horizontal">
      <nav mui-flex-direction="horizontal">
        <a mui-flex-link style="text-decoration:none;">Вид</a>
        <a mui-flex-link style="text-decoration:none;">HTML</a>
        <a mui-flex-link style="text-decoration:none;">CSS</a>
        <a mui-flex-link style="text-decoration:none;">Class</a>
        <a mui-flex-link style="text-decoration:none;">Component</a>
        <a mui-flex-link style="text-decoration:none;">Script</a>
      </nav>
    </div>



    <div mui-flex-direction="vertical">

      <div mui-flex-direction="horizontal" class="between">
        <pre mui-flex-preview><code mui-flex-code mui-color="dark"><span mui-code="symbol"><</span><span mui-code="tag">div</span> <span mui-code="attr">mui-flex-spoiler</span> <span mui-code="attr">data-margin</span><span mui-code="symbol">=</span><span mui-code="value">"0"</span> <span mui-code="attr">data-size</span><span mui-code="symbol">=</span><span mui-code="value">"600px"</span> <span mui-code="attr">data-title</span><span mui-code="symbol">=</span><span mui-code="value">"Заголовок, поддерживает формат</span> <span mui-code="value"><</span><span mui-code="value">b</span> <span mui-code="value">style='color: green;'>HTML</span><span mui-code="value"><</span><span mui-code="value">/</span><span mui-code="value">b>"</span> <span mui-code="attr">active</span><span mui-code="symbol">></span>
  <span mui-code="symbol"><</span><span mui-code="tag">p</span><span mui-code="symbol">></span> <span mui-code="text">Сюда контент в любом формате</span> <span mui-code="symbol"><</span><span mui-code="symbol">/</span><span mui-code="tag">p</span><span mui-code="symbol">></span>
<span mui-code="symbol"><</span><span mui-code="symbol">/</span><span mui-code="tag">div</span><span mui-code="symbol">></span></code></pre>
        <div mui-flex-direction="vertical">
          <div mui-flex-spoiler data-color="tinkoff_primary" data-margin="0" data-size="600px" data-title="Заголовок, поддерживает формат <b style='color: green;'>HTML</b>" active>
            <p>
              Сюда контент в любом формате
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3>
          javaScript
        </h3>

        <div mui-flex-direction="vertical">
          <div mui-flex-spoiler data-margin="0" data-size="100%" data-title="Детали кода">
            <pre mui-flex-preview><code mui-flex-code mui-color="dark" lang="javascript" class="javascript"><span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="value">"[mui-flex-spoiler]"</span><span mui-code="symbol">)</span><span mui-code="symbol">.</span><span mui-code="function">each</span><span mui-code="symbol">(</span><span mui-code="function">function</span> <span mui-code="symbol">() {</span> 
  <span mui-code="variable">const</span> <span mui-code="text">spoiler</span> <span mui-code="tag">=</span> <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">)</span><span mui-code="symbol">;</span>
  <span mui-code="variable">const</span> <span mui-code="text">content</span> <span mui-code="tag">=</span> <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">)</span><span mui-code="symbol">.</span><span mui-code="function">html</span><span mui-code="symbol">();</span>
  <span mui-code="variable">const</span> <span mui-code="text">title</span> <span mui-code="tag">=</span> <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="value">'data-title'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">active</span> <span mui-code="tag">=</span> <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="value">'active'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">size</span> <span mui-code="tag">=</span> <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="string">'data-size'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">color</span> <span mui-code="tag">=</span> <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="string">'data-color'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">margin</span> <span mui-code="tag">=</span> <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="string">'data-margin'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">icon</span> <span mui-code="tag">=</span> <span mui-code="string">`
    &lt;svg focusable="false" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;path d="M15.3 9.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.3c-.8.8-2 .8-2.8 0l-3.3-3.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L12 13l3.3-3.3z" fill="currentColor"&gt;&lt;/path&gt;
    &lt;/svg&gt;`</span><span mui-code="symbol">;</span>

  <span mui-code="variable">const</span> <span mui-code="text">html</span> <span mui-code="tag">=</span> <span mui-code="string">`
    &lt;div mui-flex-spoiler-box mui-flex-direction="vertical" style="max-width:</span> <span mui-code="tag">$</span><span mui-code="symbol">{</span><span mui-code="text"> size </span><span mui-code="symbol">}</span><span mui-code="string">; margin:</span> </span><span mui-code="tag">$</span><span mui-code="symbol">{</span><span mui-code="text"> margin </span><span mui-code="symbol">}</span><span mui-code="string">"&gt;</span>
      &lt;div</span> <span mui-code="tag">$</span><span mui-code="symbol">{</span> <span mui-code="text">color</span> <span mui-code="tag">?</span> <span mui-code="string">'mui-color="'</span><span mui-code="tag">+</span><span mui-code="text">color</span><span mui-code="tag">+</span><span mui-code="string">'"'</span> <span mui-code="tag">:</span> <span mui-code="string">''</span><span mui-code="symbol">}</span> <span mui-code="string">mui-flex-spoiler-title style="margin: 0;"</span> <span mui-code="tag">$</span><span mui-code="symbol">{</span> <span mui-code="tag">typeof</span> <span mui-code="text">active</span> <span mui-code="tag">!=</span> <span mui-code="string">'undefined'</span> <span mui-code="tag">?</span> <span mui-code="string">'active'</span> <span mui-code="tag">:</span> <span mui-code="string">''</span><span mui-code="symbol">}</span><span mui-code="string">&gt;</span>
        <span mui-code="string">&lt;div mui-flex-text="small"&gt;</span>
          <span mui-code="tag">$</span><span mui-code="symbol">{</span><span mui-code="text">title</span><span mui-code="symbol">}</span>
        <span mui-code="string">&lt;/div&gt;
        &lt;div mui-flex-icon type="arrow_down"&gt;</span>
          <span mui-code="tag">$</span><span mui-code="symbol">{</span><span mui-code="text">icon</span><span mui-code="symbol">}</span>
        <span mui-code="string">&lt;/div&gt;
      &lt;/div&gt;
      &lt;div mui-flex-direction="vertical" mui-flex-spoiler-content style="display: none;"&gt;</span>
        <span mui-code="tag">$</span><span mui-code="symbol">{</span><span mui-code="text">content</span><span mui-code="symbol">}</span>
      <span mui-code="string">&lt;/div&gt;
    &lt;/div&gt;`</span><span mui-code="symbol">;</span>
  <span mui-code="text">spoiler</span><span mui-code="symbol">.</span><span mui-code="function">replaceWith</span><span mui-code="symbol">(</span><span mui-code="text">html</span><span mui-code="symbol">);</span>
<span mui-code="symbol">});</span>

<span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="string">"[mui-flex-spoiler-title]"</span><span mui-code="symbol">).</span><span mui-code="function">on</span><span mui-code="symbol">(</span><span mui-code="string">'click'</span><span mui-code="symbol">,</span> <span mui-code="function">function</span> <span mui-code="symbol">() {</span>
  <span mui-code="variable">const</span> <span mui-code="text">icon</span> <span mui-code="tag">=</span> <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">children</span><span mui-code="symbol">(</span><span mui-code="string">'[mui-flex-icon]'</span><span mui-code="symbol">);</span>
  <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">toggleClass</span><span mui-code="symbol">(</span><span mui-code="string">'active'</span><span mui-code="symbol">);</span>
  <span mui-code="text">icon</span><span mui-code="symbol">.</span><span mui-code="function">toggleClass</span><span mui-code="symbol">(</span><span mui-code="string">'rotate'</span><span mui-code="symbol">);</span>
  <span mui-code="variable">const</span> <span mui-code="text">content</span> <span mui-code="tag">=</span> <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">siblings</span><span mui-code="symbol">(</span><span mui-code="string">'[mui-flex-spoiler-content]'</span><span mui-code="symbol">);</span>
  <span mui-code="function">console</span><span mui-code="symbol">.</span><span mui-code="function">log</span><span mui-code="symbol">(</span><span mui-code="text">content</span><span mui-code="symbol">.</span><span mui-code="function">is</span><span mui-code="symbol">(</span><span mui-code="string">':visible'</span><span mui-code="symbol">))</span>
  <span mui-code="text">content</span><span mui-code="symbol">.</span><span mui-code="function">slideToggle</span><span mui-code="symbol">(</span> <span mui-code="function">function</span> <span mui-code="symbol">() {</span><span mui-code="symbol">});</span>
<span mui-code="symbol">});</span>

<span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="string">"[mui-flex-spoiler-title]"</span><span mui-code="symbol">).</span><span mui-code="function">each</span><span mui-code="symbol">(</span><span mui-code="function">function</span> <span mui-code="symbol">() {</span>
  <span mui-code="function">console</span><span mui-code="symbol">.</span><span mui-code="function">log</span><span mui-code="symbol">(</span><span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="string">'active'</span><span mui-code="symbol">));</span>
  <span mui-code="variable">const</span> <span mui-code="text">attr</span> <span mui-code="tag">=</span> <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">attr</span><span mui-code="symbol">(</span><span mui-code="string">'active'</span><span mui-code="symbol">);</span>
  <span mui-code="tag">if</span> <span mui-code="symbol">(</span><span mui-code="tag">typeof</span> <span mui-code="text">attr</span> <span mui-code="tag">!=</span> <span mui-code="string">'undefined'</span><span mui-code="symbol">) {</span>
    <span mui-code="tag">$</span><span mui-code="symbol">(</span><span mui-code="argument">this</span><span mui-code="symbol">).</span><span mui-code="function">trigger</span><span mui-code="symbol">(</span><span mui-code="string">'click'</span><span mui-code="symbol">);</span>
  <span mui-code="symbol">}</span>
<span mui-code="symbol">});</span></code></pre>
          </div>
        </div>
      </div>


      <div>
        <h3>
          CSS
        </h3>
        <div mui-flex-direction="vertical">
          <div mui-flex-spoiler data-margin="0" data-size="100%" data-title="Детали кода">
            <pre mui-flex-preview><code mui-flex-code mui-color="dark" lang="css"><span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-box</span><span mui-code="symbol">] {</span>
  <span mui-code="function">margin-bottom</span><span mui-code="symbol">:</span> <span mui-code="boolean">20</span><span mui-code="tag">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">width</span><span mui-code="symbol">:</span> <span mui-code="boolean">100</span><span mui-code="tag">%</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span>

<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span> <span mui-code="symbol">{</span>
  <span mui-code="function">font-weight</span><span mui-code="symbol">:</span> <span mui-code="number">400</span><span mui-code="symbol">;</span>
  <span mui-code="function">font-size</span><span mui-code="symbol">:</span> <span mui-code="number">13</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">font-family</span><span mui-code="symbol">:</span> <span mui-code="text">buiText</span><span mui-code="symbol">,</span> <span mui-code="string">Roboto</span><span mui-code="symbol">,</span> <span mui-code="function">sans-serif</span><span mui-code="symbol">;</span>
  <span mui-code="function">line-height</span><span mui-code="symbol">:</span> <span mui-code="number">24</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">display</span><span mui-code="symbol">:</span> <span mui-code="function">flex</span><span mui-code="symbol">;</span>
  <span mui-code="function">padding</span><span mui-code="symbol">:</span> <span mui-code="number">12</span><span mui-code="operator">px</span> <span mui-code="number">20</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">padding-right</span><span mui-code="symbol">:</span> <span mui-code="number">12</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">cursor</span><span mui-code="symbol">:</span> <span mui-code="function">pointer</span><span mui-code="symbol">;</span>
  <span mui-code="function">height</span><span mui-code="symbol">:</span> <span mui-code="number">56</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">border</span><span mui-code="symbol">:</span> <span mui-code="number">1</span><span mui-code="operator">px</span> <span mui-code="function">solid</span> <span mui-code="symbol">#</span><span mui-code="text">cbcfd3</span><span mui-code="symbol">;</span>
  <span mui-code="function">color</span><span mui-code="symbol">:</span> <span mui-code="symbol">#</span><span mui-code="text">333</span><span mui-code="symbol">;</span>
  <span mui-code="function">box-sizing</span><span mui-code="symbol">:</span> <span mui-code="function">border-box</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-duration</span><span mui-code="symbol">:</span> <span mui-code="symbol">.</span><span mui-code="number">3</span><span mui-code="operator">s</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-property</span><span mui-code="symbol">:</span> <span mui-code="text">background</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-timing-function</span><span mui-code="symbol">:</span> <span mui-code="function">ease-in-out</span><span mui-code="symbol">;</span>
  <span mui-code="function">border-radius</span><span mui-code="symbol">:</span> <span mui-code="number">5</span><span mui-code="operator">px</span> <span mui-code="number">5</span><span mui-code="operator">px</span> <span mui-code="number">0</span><span mui-code="operator">px</span> <span mui-code="number">0</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">align-items</span><span mui-code="symbol">:</span> <span mui-code="function">center</span><span mui-code="symbol">;</span>
  <span mui-code="function">justify-content</span><span mui-code="symbol">:</span> <span mui-code="function">space-between</span><span mui-code="symbol">;</span>
  <span mui-code="function">background</span><span mui-code="symbol">:</span> <span mui-code="symbol">#</span><span mui-code="text">fff</span><span mui-code="symbol">;</span>
  <span mui-code="function">margin</span><span mui-code="symbol">:</span> <span mui-code="number">0</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span>

<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span><span mui-code="attr">:hover</span><span mui-code="symbol">,</span>
<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span><span mui-code="attr">.active</span> <span mui-code="symbol">{</span>
  <span mui-code="function">background</span><span mui-code="symbol">:</span> <span mui-code="function">rgba</span><span mui-code="symbol">(</span><span mui-code="number">51</span><span mui-code="symbol">,</span> <span mui-code="number">51</span><span mui-code="symbol">,</span> <span mui-code="number">51</span><span mui-code="symbol">,</span> <span mui-code="number">0.24</span><span mui-code="symbol">);</span>
  <span mui-code="function">transition-property</span><span mui-code="symbol">:</span> <span mui-code="function">background</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-timing-function</span><span mui-code="symbol">:</span> <span mui-code="function">ease-in-out</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-duration</span><span mui-code="symbol">:</span> <span mui-code="symbol">.</span><span mui-code="number">3</span><span mui-code="operator">s</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span>

<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span><span mui-code="symbol">[</span><span mui-code="attr">mui-color</span><span mui-code="operator">=</span><span mui-code="string">"tinkoff_primary"</span><span mui-code="symbol">]</span><span mui-code="attr">:hover</span><span mui-code="symbol">,</span>
<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span><span mui-code="symbol">[</span><span mui-code="attr">mui-color</span><span mui-code="operator">=</span><span mui-code="string">"tinkoff_primary"</span><span mui-code="symbol">]</span><span mui-code="attr">.active</span><span mui-code="symbol"> {</span>
  <span mui-code="function">background</span><span mui-code="symbol">:</span> <span mui-code="symbol">#</span><span mui-code="text">ffdd2d</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-property</span><span mui-code="symbol">:</span> <span mui-code="text">background</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-timing-function</span><span mui-code="symbol">:</span> <span mui-code="function">ease-in-out</span><span mui-code="symbol">;</span>
  <span mui-code="function">transition-duration</span><span mui-code="symbol">: .</span><span mui-code="number">3</span><span mui-code="operator">s</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span>

<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-content</span><span mui-code="symbol">]</span> <span mui-code="symbol">{</span>
  <span mui-code="function">opacity</span><span mui-code="symbol">:</span> <span mui-code="number">1</span><span mui-code="symbol">;</span>
  <span mui-code="function">font-weight</span><span mui-code="symbol">:</span> <span mui-code="number">400</span><span mui-code="symbol">;</span>
  <span mui-code="function">font-size</span><span mui-code="symbol">:</span> <span mui-code="number">13</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">font-family</span><span mui-code="symbol">:</span> <span mui-code="string">Roboto</span><span mui-code="symbol">,</span> <span mui-code="function">sans-serif</span><span mui-code="symbol">;</span>
  <span mui-code="function">line-height</span><span mui-code="symbol">:</span> <span mui-code="number">24</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">padding</span><span mui-code="symbol">:</span> <span mui-code="number">20</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">word-wrap</span><span mui-code="symbol">:</span> <span mui-code="function">break-word</span><span mui-code="symbol">;</span>
  <span mui-code="function">background</span><span mui-code="symbol">:</span> <span mui-code="symbol">#</span><span mui-code="text">fff</span><span mui-code="symbol">;</span>
  <span mui-code="function">margin</span><span mui-code="symbol">:</span> <span mui-code="number">0</span><span mui-code="symbol">;</span>
  <span mui-code="function">padding</span><span mui-code="symbol">:</span> <span mui-code="number">16</span><span mui-code="operator">px</span> <span mui-code="number">10</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">border</span><span mui-code="symbol">:</span> <span mui-code="number">1</span><span mui-code="operator">px</span> <span mui-code="function">solid</span> <span mui-code="symbol">#</span><span mui-code="text">cbcfd3</span><span mui-code="symbol">;</span>
  <span mui-code="function">border-top</span><span mui-code="symbol">:</span> <span mui-code="function">none</span><span mui-code="symbol">;</span>
  <span mui-code="function">border-radius</span><span mui-code="symbol">:</span> <span mui-code="number">0</span><span mui-code="operator">px</span> <span mui-code="number">0</span><span mui-code="operator">px</span> <span mui-code="number">4</span><span mui-code="operator">px</span> <span mui-code="number">4</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span>

<span mui-code="tag">div</span><span mui-code="symbol">[</span><span mui-code="attr">mui-flex-spoiler-title</span><span mui-code="symbol">]</span><span mui-code="operator">></span><span mui-code="attr">.title</span><span mui-code="symbol"> {</span>
  <span mui-code="function">margin-right</span><span mui-code="symbol">:</span> <span mui-code="number">8</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
  <span mui-code="function">white-space</span><span mui-code="symbol">:</span> <span mui-code="function">nowrap</span><span mui-code="symbol">;</span>
  <span mui-code="function">overflow</span><span mui-code="symbol">:</span> <span mui-code="function">hidden</span><span mui-code="symbol">;</span>
  <span mui-code="function">text-overflow</span><span mui-code="symbol">:</span> <span mui-code="function">ellipsis</span><span mui-code="symbol">;</span>
  <span mui-code="function">-webkit-box-flex</span><span mui-code="symbol">:</span> <span mui-code="number">1</span><span mui-code="symbol">;</span>
  <span mui-code="function">flex-grow</span><span mui-code="symbol">:</span> <span mui-code="number">1</span><span mui-code="symbol">;</span>
  <span mui-code="function">max-height</span><span mui-code="symbol">:</span> <span mui-code="number">24</span><span mui-code="operator">px</span><span mui-code="symbol">;</span>
<span mui-code="symbol">}</span></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <script>
  hljs.initHighlightingOnLoad();
  
</script> -->
