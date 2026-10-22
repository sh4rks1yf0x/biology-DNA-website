import {REFERENCE,CODE,AMINO,translate} from './core.mjs';
const copy={
en:{editTitle:'Edit DNA letters',navTranslate:'Translate',navLecture:'Lecture',navVideos:'Videos',heroIntro:'Four letters. A world of instructions. Scroll to look closer, then turn a DNA message into amino acids.',scroll:'Scroll to look closer',introEyebrow:'THE MOLECULE BEHIND THE MESSAGE',introTitle:'A little introduction to DNA.',pairIntro:'DNA is a double helix. Its bases pair A with T and C with G. The order of these letters carries genetic information.',aminoAcids:'Amino acids',flowIntro:'Transcription copies information into RNA. Translation reads mRNA codons to build an amino acid chain.',readTitle:'Read the sequence',readIntro:'Start here: follow each group of three letters from coding DNA to mRNA to an amino acid.',flowGuide:'Read each numbered card from top to bottom. Then move to the next card.',codingExplain:'We show the coding strand: mRNA has the same sequence with U instead of T. The complementary template strand is the one read during transcription.',yourFlow:'Your sequence, decoded',fineTune:'Change one letter',fineTuneHelp:'Try an example, or tap a DNA letter below to replace it.',lectureEyebrow:'GO A LITTLE DEEPER',lectureTitle:'Lecture & reading.',transcriptionTitle:'Transcription: DNA → RNA',transcriptionText:'See how a gene’s information is copied into RNA.',translationTitle:'Translation: RNA → protein',translationText:'Learn how codons specify the amino acids in a chain.',watchEyebrow:'WATCH THE PROCESS',videosTitle:'DNA in motion.',videoNote:'Open these educational resources to watch animations. Video language and captions depend on the provider.',geneVideo:'What’s a gene?',geneVideoText:'A video introduction to genes and their instructions.',animationVideo:'Transcription & translation animations',animationText:'Explore a curated collection of learning animations.',codon:'CODON',coding:'CODING DNA',amino:'AMINO ACID',transcribe:'Transcription',translate:'Translation',stop:'STOP',unread:'Not translated',startWarning:'The initial ATG has changed. This is a fixed-frame codon comparison; normal translation initiation is uncertain.',stopWarning:'Translation stops here. Later mRNA codons are still shown, but they are not translated.',stoplossWarning:'No stop signal in this fragment. Translation could continue beyond the sequence shown.',defaultWarning:'STOP is a signal, not an amino acid. This invented sequence is an educational model.',helixLabel:'Illustration of DNA with complementary A–T and C–G base pairs.'},
zh:{editTitle:'編輯 DNA 字母',navTranslate:'DNA 轉譯',navLecture:'閱讀教室',navVideos:'影片',heroIntro:'四個字母，藏著生命的指令。往下滑、靠近看，再把 DNA 訊息讀成胺基酸。',scroll:'往下滑，放大看看',introEyebrow:'遺傳訊息背後的分子',introTitle:'先來認識 DNA。',pairIntro:'DNA 是雙螺旋，鹼基以 A 配 T、C 配 G 的方式成對。這些字母的排列順序承載遺傳資訊。',aminoAcids:'胺基酸',flowIntro:'轉錄將遺傳資訊複製成 RNA；轉譯則讀取 mRNA 密碼子，組成胺基酸鏈。',readTitle:'讀取序列',readIntro:'從這裡開始：追蹤每三個字母，看看編碼股 DNA 如何對應到 mRNA 與胺基酸。',flowGuide:'每張卡片由上往下讀，再移到下一張編號卡片。',codingExplain:'這裡顯示編碼股，mRNA 序列與它相同，但以 U 取代 T。轉錄時真正被讀取的是互補的模板股。',yourFlow:'解讀你的序列',fineTune:'改變一個字母',fineTuneHelp:'試試範例，或點選下方 DNA 字母進行替換。',lectureEyebrow:'再深入一點',lectureTitle:'閱讀教室。',transcriptionTitle:'轉錄：DNA → RNA',transcriptionText:'了解基因資訊如何複製成 RNA。',translationTitle:'轉譯：RNA → 蛋白質',translationText:'了解密碼子如何指定胺基酸鏈中的胺基酸。',watchEyebrow:'看見分子的運作',videosTitle:'動起來的 DNA。',videoNote:'開啟以下教學資源觀看動畫，影片語言與字幕依提供者而定。',geneVideo:'什麼是基因？',geneVideoText:'透過影片認識基因與遺傳指令。',animationVideo:'轉錄與轉譯動畫',animationText:'探索經挑選的教學動畫資源。',codon:'密碼子',coding:'編碼股 DNA',amino:'胺基酸',transcribe:'轉錄',translate:'轉譯',stop:'終止',unread:'不再轉譯',startWarning:'開頭的 ATG 已改變。這裡僅依固定閱讀框對照密碼子，正常轉譯的起始尚不確定。',stopWarning:'轉譯在此停止。後續 mRNA 密碼子仍顯示，但不再被轉譯。',stoplossWarning:'此片段沒有終止訊號，轉譯可能繼續至未顯示的後續序列。',defaultWarning:'STOP 是終止訊號，不是胺基酸。這段虛構序列僅供教學。',helixLabel:'DNA 示意圖，顯示互補的 A–T 與 C–G 鹼基配對。'},
es:{editTitle:'Edita las letras del ADN',navTranslate:'Traducir',navLecture:'Lecturas',navVideos:'Vídeos',heroIntro:'Cuatro letras. Un mundo de instrucciones. Desliza para mirar de cerca y convierte un mensaje de ADN en aminoácidos.',scroll:'Desliza para acercarte',introEyebrow:'LA MOLÉCULA DETRÁS DEL MENSAJE',introTitle:'Una introducción al ADN.',pairIntro:'El ADN es una doble hélice. Sus bases emparejan A con T y C con G. El orden de las letras contiene información genética.',aminoAcids:'Aminoácidos',flowIntro:'La transcripción copia información al ARN. La traducción lee los codones del ARNm para construir una cadena de aminoácidos.',readTitle:'Lee la secuencia',readIntro:'Empieza aquí: sigue cada grupo de tres letras desde el ADN codificante al ARNm y a un aminoácido.',flowGuide:'Lee cada tarjeta numerada de arriba abajo. Después pasa a la siguiente.',codingExplain:'Mostramos la cadena codificante: el ARNm tiene la misma secuencia con U en lugar de T. La cadena molde complementaria es la que se lee durante la transcripción.',yourFlow:'Tu secuencia, descodificada',fineTune:'Cambia una letra',fineTuneHelp:'Prueba un ejemplo o toca una letra del ADN para sustituirla.',lectureEyebrow:'UN POCO MÁS A FONDO',lectureTitle:'Lecciones y lecturas.',transcriptionTitle:'Transcripción: ADN → ARN',transcriptionText:'Descubre cómo se copia la información de un gen al ARN.',translationTitle:'Traducción: ARN → proteína',translationText:'Aprende cómo los codones especifican los aminoácidos.',watchEyebrow:'OBSERVA EL PROCESO',videosTitle:'ADN en movimiento.',videoNote:'Abre estos recursos educativos para ver animaciones. El idioma y los subtítulos dependen del proveedor.',geneVideo:'¿Qué es un gen?',geneVideoText:'Una introducción en vídeo a los genes y sus instrucciones.',animationVideo:'Animaciones de transcripción y traducción',animationText:'Explora una selección de animaciones educativas.',codon:'CODÓN',coding:'ADN CODIFICANTE',amino:'AMINOÁCIDO',transcribe:'Transcripción',translate:'Traducción',stop:'PARADA',unread:'Sin traducir',startWarning:'El ATG inicial ha cambiado. Esta comparación usa un marco fijo; el inicio normal de la traducción es incierto.',stopWarning:'La traducción se detiene aquí. Los codones posteriores del ARNm se muestran, pero no se traducen.',stoplossWarning:'No hay señal de parada en este fragmento. La traducción podría continuar más allá.',defaultWarning:'STOP es una señal, no un aminoácido. Esta secuencia inventada es un modelo educativo.',helixLabel:'Ilustración del ADN con pares complementarios A–T y C–G.'},
ja:{editTitle:'DNA の文字を編集',navTranslate:'翻訳',navLecture:'学習資料',navVideos:'動画',heroIntro:'4つの文字に、生命の情報が。スクロールして拡大し、DNA のメッセージをアミノ酸へと読み解きましょう。',scroll:'スクロールして拡大',introEyebrow:'遺伝情報を担う分子',introTitle:'まずは DNA を知ろう。',pairIntro:'DNA は二重らせんです。塩基は A と T、C と G が対になります。この文字の並びが遺伝情報を担います。',aminoAcids:'アミノ酸',flowIntro:'転写で情報を RNA に写し、翻訳で mRNA のコドンを読んでアミノ酸の鎖を作ります。',readTitle:'配列を読む',readIntro:'ここから始めましょう。3文字のグループごとに、コーディング鎖 DNA、mRNA、アミノ酸の対応を見てください。',flowGuide:'番号付きカードを上から下へ読み、次のカードへ進みます。',codingExplain:'コーディング鎖を表示しています。mRNA は T が U に変わった配列です。転写時に読み取られるのは、相補的な鋳型鎖です。',yourFlow:'あなたの配列を解読',fineTune:'1文字を変える',fineTuneHelp:'例を選ぶか、下の DNA の文字をタップして置換してください。',lectureEyebrow:'さらに学ぼう',lectureTitle:'講義と読み物。',transcriptionTitle:'転写：DNA → RNA',transcriptionText:'遺伝子の情報が RNA に写される仕組みを学びます。',translationTitle:'翻訳：RNA → タンパク質',translationText:'コドンがアミノ酸を指定する仕組みを学びます。',watchEyebrow:'過程を見てみよう',videosTitle:'動きでわかる DNA。',videoNote:'教材を開くとアニメーションを見られます。動画の言語と字幕は提供元によって異なります。',geneVideo:'遺伝子とは？',geneVideoText:'遺伝子とその情報を紹介する動画です。',animationVideo:'転写と翻訳のアニメーション',animationText:'選ばれた教育用アニメーションを見てみましょう。',codon:'コドン',coding:'コーディング DNA',amino:'アミノ酸',transcribe:'転写',translate:'翻訳',stop:'終止',unread:'翻訳されません',startWarning:'最初の ATG が変わりました。固定読み枠による比較であり、通常の翻訳開始は不確実です。',stopWarning:'翻訳はここで終わります。後続の mRNA コドンは表示されますが、翻訳されません。',stoplossWarning:'この断片には終止シグナルがありません。翻訳は表示範囲を超えて続く可能性があります。',defaultWarning:'STOP はシグナルであり、アミノ酸ではありません。この架空の配列は学習用モデルです。',helixLabel:'相補的な A–T と C–G の塩基対を示す DNA のイラスト。'}
};
export function flowHTML(dna,lang='en',compare=false){
 const c=copy[lang],data=translate(dna);
 return data.codons.map((codon,i)=>{
  const aa=CODE[codon],past=data.stop>=0&&i>data.stop,changed=compare&&codon!==REFERENCE.slice(i*3,i*3+3);
  const letters=(str)=>[...str].map((base,j)=>`<span data-letter="${base}" class="${compare&&codon[j]!==REFERENCE[i*3+j]?'flow-base-changed':''}">${base}</span>`).join('');
  return `<div class="flow-codon${changed?' flow-changed':''}${past?' flow-unread':''}"><b class="flow-number">${c.codon} ${String(i+1).padStart(2,'0')}</b><small>${c.coding}</small><div class="flow-triplet">${letters(codon)}</div><div class="flow-arrow"><span aria-hidden="true">↓</span><small>${c.transcribe}</small></div><small>mRNA</small><div class="flow-triplet rna-triplet">${letters(codon.replaceAll('T','U'))}</div><div class="flow-arrow"><span aria-hidden="true">↓</span><small>${c.translate}</small></div><small>${c.amino}</small><div class="flow-amino${aa==='*'&&!past?' flow-stop':''}">${past?'—':aa==='*'?c.stop:AMINO[aa]}</div>${past?`<small class="unread-label">${c.unread}</small>`:''}</div>`;
 }).join('');
}
export function renderStory(lang,dna){
 const c=copy[lang];
 document.querySelectorAll('[data-story]').forEach(e=>e.textContent=c[e.dataset.story]);
 document.getElementById('story-helix').setAttribute('aria-label',c.helixLabel);
 document.getElementById('reference-flow').innerHTML=flowHTML(REFERENCE,lang);
 document.getElementById('custom-flow').innerHTML=flowHTML(dna,lang,true);
 const result=translate(dna),warning=document.getElementById('flow-warning');warning.hidden=false;
 warning.textContent=!result.start?c.startWarning:result.stop<0?c.stoplossWarning:result.stop<5?c.stopWarning:c.defaultWarning;
}
export function setupStory(){
 const svg=document.getElementById('story-helix'),section=document.getElementById('dna-intro');
 const ns='http://www.w3.org/2000/svg',reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const colors={A:'#087F8C',T:'#1D4ED8',C:'#946B13',G:'#7C3F86'},pair={A:'T',T:'A',C:'G',G:'C'};
 const make=(tag,attrs,parent=svg)=>{const n=document.createElementNS(ns,tag);for(const [k,v]of Object.entries(attrs))n.setAttribute(k,v);parent.append(n);return n;};
 const molecule=make('g',{'stroke-linecap':'round'}),rungs=[];
 for(let i=0;i<12;i++){
  const x=22+i*34,b='ATCG'[i%4],c=pair[b],group=make('g',{},molecule);
  const left=make('line',{x1:x,x2:x,stroke:colors[b],'stroke-width':7},group);
  const right=make('line',{x1:x,x2:x,stroke:colors[c],'stroke-width':7},group);
  const join=make('line',{x1:x,x2:x,y1:106,y2:114,stroke:'#91B2BA','stroke-width':1.5,'stroke-dasharray':'2 3'},group);
  const labels=[b,c].map(letter=>{const text=make('text',{x,'text-anchor':'middle',fill:colors[letter],'font-size':17,'font-family':'DM Mono,monospace','font-weight':600,stroke:'#FFFFFF','stroke-width':6,'paint-order':'stroke'},group);text.textContent=letter;return text;});
  rungs.push({x,left,right,join,labels});
 }
 const rails=[make('path',{fill:'none',stroke:'#102D3D','stroke-width':3},molecule),make('path',{fill:'none',stroke:'#32586A','stroke-width':3},molecule)];
 let visible=false,raf=0,previous=0,progress=0,target=0;
 const scrollTarget=()=>{const rect=section.getBoundingClientRect(),travel=Math.max(1,section.offsetHeight-innerHeight*.9);target=reduced.matches?1:Math.min(1,Math.max(0,-rect.top/travel));};
 function draw(time){
  const u=progress*progress*(3-2*progress),phase=reduced.matches?0:Math.sin(time/2800)*.16*(1-u);
  const offset=x=>(1-u)*Math.cos((x-18)/53+phase)*52+u*67;
  const paths=['',''];
  for(let x=8;x<=412;x+=3){const dy=offset(x);paths[0]+=`${x===8?'M':'L'}${x},${110-dy} `;paths[1]+=`${x===8?'M':'L'}${x},${110+dy} `;}
  rails.forEach((rail,i)=>rail.setAttribute('d',paths[i]));
  for(const rung of rungs){
   const d=offset(rung.x),sign=d>=0?1:-1;
   rung.left.setAttribute('y1',110-d);rung.left.setAttribute('y2',110-sign*5);
   rung.right.setAttribute('y1',110+sign*5);rung.right.setAttribute('y2',110+d);
   const opacity=Math.min(1,Math.max(0,(u-.15)/.5))*Math.min(1,Math.abs(d)/25);
   rung.labels[0].setAttribute('y',110-d*.53+5);rung.labels[1].setAttribute('y',110+d*.53+5);
   rung.labels.forEach(label=>label.setAttribute('opacity',opacity));
   rung.join.setAttribute('opacity',.35+.65*u);
  }
  molecule.setAttribute('transform',`translate(210 110) scale(${1+u*.14}) translate(-210 -110)`);
 }
 function frame(time){
  raf=0;const elapsed=previous?Math.min(50,time-previous):16;previous=time;
  progress+= (target-progress)*(1-Math.exp(-elapsed/95));
  if(Math.abs(target-progress)<.0001)progress=target;
  draw(time);
  if(visible&&!reduced.matches)raf=requestAnimationFrame(frame);
 }
 const start=()=>{if(!raf&&visible&&!reduced.matches){previous=0;raf=requestAnimationFrame(frame);}};
 const update=()=>{scrollTarget();if(reduced.matches){progress=target;draw(0);}else start();};
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)update();else if(raf){cancelAnimationFrame(raf);raf=0;}},{rootMargin:'80px'});observer.observe(section);
 window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
 reduced.addEventListener('change',()=>{if(raf){cancelAnimationFrame(raf);raf=0;}update();});
 scrollTarget();progress=reduced.matches?1:target;draw(0);
}
