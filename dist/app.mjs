import { courseCopy, renderCourse, renderCourseCells } from './course.mjs';
import { renderStory, setupStory } from './story.mjs';
import {es,ja,dynamic} from './languages.mjs';
import { REFERENCE, parseCustomDNA } from './core.mjs';
const $ = id => document.getElementById(id);
const pending=new Map();
function smoothUpdate(key,callback,ids){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){callback();return;}
  const previous=pending.get(key);if(previous)previous.forEach(a=>a.cancel());
  const elements=ids.map($).filter(Boolean);
  const outgoing=elements.map(e=>e.animate([{opacity:1},{opacity:0}],{duration:110,easing:'ease-out',fill:'forwards'}));
  pending.set(key,outgoing);
  Promise.all(outgoing.map(a=>a.finished)).then(()=>{
    if(pending.get(key)!==outgoing)return;
    callback();outgoing.forEach(a=>a.cancel());
    const incoming=elements.map(e=>e.animate([{opacity:0},{opacity:1}],{duration:230,easing:'ease-in-out'}));
    pending.set(key,incoming);Promise.all(incoming.map(a=>a.finished)).then(()=>{if(pending.get(key)===incoming)pending.delete(key);}).catch(()=>{});
  }).catch(()=>{});
}
const updateLab=()=>smoothUpdate('lab',renderLab,['custom-flow']);
let lang='en', dna=REFERENCE;
const zh={
skip:'跳至突變實驗室',navLab:'突變實驗室',navCells:'細胞訊號',navSources:'資料來源',eyebrow:'當生物學遇見電腦科學',hero1:'微小的改變，',hero2:'不同的故事。',intro:'改變一個 DNA 字母，追蹤訊息如何轉成蛋白質。探索突變為何可能產生影響，以及為何有時不會。',start:'進入突變實驗室',credit:'RYAN HSU · BIOL 100 · 舊金山州立大學',project:'電腦科學 × 生物學專題',takeaway:'突變是 DNA 序列的改變，不代表一定會生病。',keep:'請記住這個重點',labEyebrow:'01 / 改變遺傳訊息',labTitle:'突變實驗室',labIntro:'選擇一個範例，或點選任一個 DNA 字母進行替換，即時比較結果。',reference:'參考序列',silent:'同義突變',missense:'錯義突變',nonsense:'提前終止',sequenceTitle:'讀取序列',codingNote:'示意用編碼股 DNA，由 5′ → 3′ 讀取。每三個鹼基為一組密碼子。',originalDNA:'參考 DNA',yourDNA:'你的 DNA · 點選一個字母',editing:'正在編輯的位置',reset:'重設 ↺',selected:'選取的鹼基',changed:'改變的鹼基',follow:'追蹤訊息的旅程',live:'即時比較',yourResult:'你的結果',transcription:'/ 轉錄',protein:'蛋白質',translation:'/ 轉譯',rnaNote:'mRNA 與此編碼股 DNA 的序列相同，但以 U 取代 T。轉譯以密碼子為單位，遇到終止訊號便停止。',observation:'觀察結果',basesChanged:'改變的鹼基數',peptideLength:'顯示的胺基酸數',proteinEffect:'胜肽序列比較',resultLimit:'光憑胺基酸改變，無法判斷蛋白質是否有害，也無法判定是否會發生癌症。',modelLabel:'關於此模型',modelNote:'這段虛構的 18 個鹼基序列並非人類基因。它使用標準遺傳密碼和固定閱讀框，示範單一鹼基替換；未模擬 RNA 剪接、基因調控、蛋白質摺疊或個人癌症風險。',concept1Title:'相同的胺基酸',concept1:'同義替換改變密碼子，但不改變其編碼的胺基酸。在真實基因中，「蛋白質序列相同」不保證完全沒有生物學影響。',concept2Title:'不同的胺基酸',concept2:'錯義替換改變一個胺基酸。實際影響取決於改變的位置與蛋白質的功能。',concept3Title:'提早結束',concept3:'無義替換會產生提早出現的終止密碼子，可能形成較短的蛋白質，細胞也可能將該 RNA 分解。',cellEyebrow:'02 / 從訊息到細胞行為',cellTitle1:'細胞生長需要',cellTitle2:'制衡與把關。',cellIntro:'有些基因促進細胞生長，有些控制分裂或修復 DNA 損傷。當多道防線遭到破壞，癌症便可能發展。',trySignals:'探索細胞的防線',signal1:'生長訊號持續開啟',signal1sub:'致癌基因概念 · 油門',signal2:'生長煞車減弱',signal2sub:'腫瘤抑制基因概念 · 煞車',signal3:'DNA 修復減弱',signal3sub:'修復基因概念 · 維修團隊',resetCells:'恢復所有防線 ↺',illustration:'細胞培養概念示意',cellLimit:'這是獨立的定性示意圖，並非上方 DNA 序列的模擬結果。細胞間距與外觀皆為象徵，不能預測癌症、生長速率或機率。',cellTakeaway:'癌症通常涉及不只一個遺傳改變。遺傳到風險變異會提高風險，但不代表一定會罹癌。',connectEyebrow:'03 / 建立連結',connectTitle:'從程式碼到細胞。',connectLead:'在電腦科學中，一個字元的改變可能影響程式行為；在生物學中，一個 DNA 鹼基的改變可能改變訊息，但必須考慮情境。',connectBody:'這個專題以 HTML、CSS 與 JavaScript，讓肉眼看不見的過程更容易探索。透過比較輸入與輸出，我們能提出更好的問題：究竟改變了什麼？下結論之前，還需要什麼證據？',analogy:'程式碼的比喻也有限制：細胞是具有修復、調控與許多分子交互作用的生命系統。',signature:'電腦科學 · Biol 100 · 舊金山州立大學',sourcesEyebrow:'04 / 追蹤科學證據',sourcesTitle:'以可靠來源為基礎。',sourcesIntro:'進一步了解範例背後的科學。本站以適合課堂展示的文字改述來源內容。',source1:'癌症相關基因、累積變異與遺傳風險',source2:'突變的定義與發生位置',source3:'改變胺基酸的鹼基替換',source4:'提早終止訊號與縮短的蛋白質',source5:'本網站使用的密碼子對照表',presentNote:'動手探索，帶著問題討論。',print:'列印／儲存專題講義 ↗',footer:'Biol 100 學習成果 · 2026 年 10 月 · 教學示意模型',back:'回到頂端 ↑'
};
const en=Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(e=>[e.dataset.i18n,e.textContent]));
for(const [code,dict] of Object.entries({en,zh,es,ja}))Object.assign(dict,courseCopy[code]);
for(const [code,text] of Object.entries({en:'Read the reference sequence, then create your own DNA and follow its message from DNA to amino acids.',zh:'先閱讀參考序列，再建立自己的 DNA，追蹤訊息如何從 DNA 轉成胺基酸。',es:'Lee la secuencia de referencia, crea tu propio ADN y sigue su mensaje desde el ADN hasta los aminoácidos.',ja:'参照配列を読み、自分の DNA を作成して、DNA からアミノ酸までの情報の流れを追いましょう。'}))({en,zh,es,ja})[code].labIntro=text;
const t=(a,b)=>lang==='en'?a:lang==='zh'?b:(dynamic[lang]?.[a]||a);
const customCopy={
 en:{title:'Create your DNA',description:'Enter 18 bases using A, T, C and G. Spaces and lowercase letters are welcome. Your sequence replaces “Your DNA” and is compared with the fixed reference. This model compares substitutions only.',label:'Your coding DNA · 5′ → 3′',apply:'Apply sequence →',copy:'Use current DNA',empty:'Enter a DNA sequence first.',letters:'Use only A, T, C and G. Remove numbers, punctuation or other letters.',length:'Enter exactly 18 bases (6 codons).',success:'Sequence applied. Compare the highlighted bases below.',loaded:'Current DNA copied into the editor. Edit it, then apply.'},
 zh:{title:'建立你的 DNA',description:'輸入 18 個鹼基，只能使用 A、T、C、G，可含空格與小寫。序列將取代「你的 DNA」，並與固定參考序列比較。本模型僅比較鹼基替換。',label:'你的編碼股 DNA · 5′ → 3′',apply:'套用序列 →',copy:'帶入目前的 DNA',empty:'請先輸入 DNA 序列。',letters:'只能使用 A、T、C、G，請移除數字、標點或其他字母。',length:'請輸入剛好 18 個鹼基（6 組密碼子）。',success:'已套用序列，請比較下方標示的鹼基變化。',loaded:'已帶入目前 DNA，修改後請按套用。'},
 es:{title:'Crea tu ADN',description:'Introduce 18 bases con A, T, C y G. Se aceptan espacios y minúsculas. Tu secuencia sustituye “Tu ADN” y se compara con la referencia fija. Este modelo solo compara sustituciones.',label:'Tu cadena codificante de ADN · 5′ → 3′',apply:'Aplicar secuencia →',copy:'Usar ADN actual',empty:'Introduce una secuencia de ADN.',letters:'Usa solo A, T, C y G. Elimina números, signos y otras letras.',length:'Introduce exactamente 18 bases (6 codones).',success:'Secuencia aplicada. Compara las bases resaltadas abajo.',loaded:'ADN actual copiado. Edítalo y pulsa Aplicar.'},
 ja:{title:'自分の DNA を作成',description:'A・T・C・G で18塩基を入力してください。空白と小文字も使えます。「あなたの DNA」を置き換え、固定の参照配列と比較します。このモデルは塩基置換のみを比較します。',label:'コーディング鎖 DNA · 5′ → 3′',apply:'配列を適用 →',copy:'現在の DNA を使う',empty:'DNA 配列を入力してください。',letters:'A・T・C・G のみ使用できます。数字や記号などを削除してください。',length:'18塩基（6コドン）を入力してください。',success:'配列を適用しました。下の強調された塩基を比較してください。',loaded:'現在の DNA をコピーしました。編集して適用してください。'}
};
let customStatus='';
function renderCustom(){
 const c=customCopy[lang];
 for(const [id,key] of [['custom-title','title'],['custom-description','description'],['custom-label','label'],['custom-apply','apply'],['custom-copy','copy']])$(id).textContent=c[key];
 const {sequence,error}=parseCustomDNA($('custom-sequence').value);
 $('custom-count').textContent=`${sequence.length} / 18`;
 $('custom-feedback').textContent=customStatus?c[customStatus]:'';
 const invalid=['empty','letters','length'].includes(customStatus);
 $('custom-sequence').setAttribute('aria-invalid',String(invalid));
 $('custom-feedback').classList.toggle('is-error',invalid);
}
$('custom-sequence').addEventListener('input',()=>{customStatus='';renderCustom();});
$('custom-copy').addEventListener('click',()=>{$('custom-sequence').value=dna.match(/.{3}/g).join(' ');customStatus='loaded';renderCustom();$('custom-sequence').focus();});
$('custom-dna-form').addEventListener('submit',e=>{
 e.preventDefault();const {sequence,error}=parseCustomDNA($('custom-sequence').value);
 if(error){customStatus=error;renderCustom();$('custom-sequence').focus();return;}
 dna=sequence;customStatus='success';
 $('custom-sequence').value=sequence.match(/.{3}/g).join(' ');renderCustom();updateLab();
});
function renderLab(){renderStory(lang,dna);}
function renderCells(){
  const growth=$('growth').checked,brake=$('brake').checked,repair=$('repair').checked,count=Number(growth)+Number(brake)+Number(repair);
  const title=count===0?t('Safeguards working together','多道防線共同運作'):count>1?t('Multiple safeguards affected','多道防線受到影響'):growth?t('A persistent growth signal','持續的生長訊號'):brake?t('A weakened growth brake','減弱的生長煞車'):t('A weakened repair system','減弱的修復系統');
  let description=count===0?t('Growth signals, brakes, and DNA repair help keep cell behavior regulated.','生長訊號、煞車與 DNA 修復，共同協助調控細胞行為。'):'';
  if(growth)description+=t('Some oncogenes can send persistent growth signals. ','某些致癌基因可能持續發出促進生長的訊號。');
  if(brake)description+=t('Loss of tumor suppressor function can weaken division controls. ','腫瘤抑制基因功能喪失，可能削弱細胞分裂的控制。');
  if(repair)description+=t('Impaired DNA repair can allow additional changes to accumulate; it does not directly set the division rate.','DNA 修復受損可能讓更多變異累積，但不會直接決定分裂速率。');
  $('cell-state').textContent=title;$('cell-description').textContent=description;
  $('dish-status').textContent=count===0?t('REGULATED','調控正常'):t('SAFEGUARDS ALTERED','防線改變');
  const crowded=growth||brake,total=crowded?30:14;
  for(let i=0;i<30;i++){
    let node=$('cell-dots').children[i];
    if(!node){
      node=document.createElementNS('http://www.w3.org/2000/svg','g');
      node.classList.add('cell-node');
      node.innerHTML='<ellipse class="cell-body" rx="18" ry="15.5" fill-opacity=".13" stroke-opacity=".65"/><ellipse class="cell-nucleus" cx="1" cy="-1" rx="6" ry="5.2" fill-opacity=".65"/><path class="cell-error" d="M-4 -4l7 7m0-7l-7 7" stroke="#f1bd8c" stroke-width="1.7"/>';
      $('cell-dots').appendChild(node);
    }
    const angle=i*2.399963229728653,rad=Math.sqrt((Math.min(i,total-1)+.5)/total),x=250+Math.cos(angle)*rad*165,y=175+Math.sin(angle)*rad*99;
    const color=growth&&brake?'#E4BD78':crowded?'#85D9CD':'#83B8DA';
    node.style.transform=`translate(${x}px,${y}px)`;
    node.style.opacity=i<total?'1':'0';
    node.querySelector('.cell-body').style.fill=color;node.querySelector('.cell-body').style.stroke=color;
    node.querySelector('.cell-nucleus').style.fill=color;
    node.querySelector('.cell-error').style.opacity=repair&&i%3===0?'1':'0';
  }
  $('dish-title').textContent=title+'. '+t('Symbolic cell arrangement.','象徵性的細胞排列。');
  renderCourseCells(lang,{growth,brake,repair});
}
['growth','brake','repair'].forEach(id=>$(id).addEventListener('change',()=>{renderCells();if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)$('cell-description').animate([{opacity:0},{opacity:1}],{duration:320});}));
$('reset-cells').addEventListener('click',()=>{['growth','brake','repair'].forEach(id=>$(id).checked=false);renderCells();});
function setLanguage(next){
  lang=next;document.documentElement.lang=lang==='zh'?'zh-Hant':lang;
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=({en,zh,es,ja})[lang][e.dataset.i18n]||en[e.dataset.i18n]);
  $('language').value=lang;
  $('language').setAttribute('aria-label',({en:'Language',zh:'語言',es:'Idioma',ja:'言語'})[lang]);
  document.querySelector('nav').setAttribute('aria-label',t('Main navigation','主要導覽'));
  renderLab();renderCells();renderCustom();renderCourse(lang);
}
$('language').addEventListener('change',e=>{const next=e.target.value;smoothUpdate('language',()=>setLanguage(next),['top','site-header']);});
$('print').addEventListener('click',()=>window.print());
setupStory();setLanguage('en');
