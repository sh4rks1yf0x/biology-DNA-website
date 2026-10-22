export const REFERENCE = 'ATGGAATTTCGATGGTAA';
const bases = 'TCAG';
const amino = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
export const CODE = Object.fromEntries([...bases].flatMap((a,i)=>[...bases].flatMap((b,j)=>[...bases].map((c,k)=>[a+b+c,amino[i*16+j*4+k]]))));
export const AMINO = {F:'Phe',L:'Leu',S:'Ser',Y:'Tyr','*':'STOP',C:'Cys',W:'Trp',P:'Pro',H:'His',Q:'Gln',R:'Arg',I:'Ile',M:'Met',T:'Thr',N:'Asn',K:'Lys',V:'Val',A:'Ala',D:'Asp',E:'Glu',G:'Gly'};
export function translate(dna) {
  if (!/^[ACGT]+$/.test(dna) || dna.length % 3) throw new Error('Use complete DNA codons.');
  const codons = dna.match(/.{3}/g);
  const peptide = [];
  let stop = -1;
  for (let i=0;i<codons.length;i++) { const aa=CODE[codons[i]]; if(aa==='*'){stop=i;break;} peptide.push(aa); }
  return {codons,peptide,stop,start:codons[0]==='ATG'};
}
export function substitute(dna,index,base){
  if(!Number.isInteger(index)||index<0||index>=dna.length||!['A','C','G','T'].includes(base))throw new Error('Invalid substitution');
  return dna.slice(0,index)+base+dna.slice(index+1);
}
export const PRESETS = {reference:REFERENCE,silent:substitute(REFERENCE,5,'G'),missense:substitute(REFERENCE,4,'T'),nonsense:substitute(REFERENCE,14,'A')};
export function analyze(dna){
  const ref=translate(REFERENCE), changed=translate(dna);
  const positions=[...dna].flatMap((b,i)=>b!==REFERENCE[i]?[i]:[]);
  let type='missense';
  if(!positions.length)type='reference';
  else if(!changed.start)type='start';
  else if(changed.stop>=0 && (ref.stop<0||changed.stop<ref.stop))type='nonsense';
  else if(ref.stop>=0&&(changed.stop<0||changed.stop>ref.stop))type='stoploss';
  else if(ref.peptide.join('')===changed.peptide.join(''))type='silent';
  return {type,positions,ref,changed};
}

export function parseCustomDNA(value){
  const sequence=value.replace(/\s/g,'').toUpperCase();
  const error=!sequence?'empty':/[^ACGT]/.test(sequence)?'letters':sequence.length!==REFERENCE.length?'length':null;
  return {sequence,error};
}
