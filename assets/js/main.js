(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
var LTH={fullgrain:["Full-grain leather","The outer layer of the hide with its natural surface left intact. The strongest leather and the only one that develops a real patina.",["Condition two to three times a year, less in a humid climate.","Let scratches settle; most buff out with a soft cloth and warm fingers.","Keep it away from direct heat, which dries and cracks the surface."],"Darkens and softens with use"],
topgrain:["Top-grain leather","The outer layer sanded and refinished to even out marks. Slightly less durable than full-grain, more uniform to look at.",["Wipe with a barely damp cloth, never a soaked one.","Use a conditioner made for finished leather, sparingly.","The finish can wear through at corners, so pad the base in storage."],"Holds its colour, ages slowly"],
saffiano:["Saffiano (cross-hatch finish)","Calf leather pressed with a cross-hatch and sealed with a coating. Very resistant to water and scratches.",["Wipe clean with a dry or barely damp cloth; it needs no conditioner.","Avoid harsh cleaners, which lift the coating.","Deep scratches cannot be buffed out because the finish is printed."],"Stays as it was; little patina"],
suede:["Suede and nubuck","The underside of the hide, brushed for a velvet surface. Beautiful and the least forgiving of rain.",["Brush with a suede brush in one direction after each wear.","Protect with a spray made for suede before first use, then twice a year.","Blot water marks straight away; never rub them."],"Shows wear quickly at corners"],
patent:["Patent leather","Leather sealed under a high-gloss finish. Wipes clean and resists water, but transfers colour easily.",["Store away from other coloured items; dye transfer is permanent.","Clean with a soft cloth and a drop of mild soap.","Cold makes the finish brittle, so avoid leaving it in a cold car."],"Keeps its shine, can crack with age"],
canvas:["Coated canvas","Cotton canvas with a printed or laminated coating. Light, hard-wearing and not really leather at all.",["Wipe with a damp cloth and mild soap; it tolerates far more than leather.","Leather trim still needs conditioning even when the body does not.","Corners wear first because the coating thins there."],"Barely changes; trim ages instead"],
exotic:["Embossed grain","Calf or cow leather stamped with a pattern. Often mistaken for exotic hide at a glance.",["Clean along the grain, not across it, so nothing lodges in the pattern.","A soft toothbrush lifts dust out of the texture.","Condition lightly; too much product pools in the embossing."],"Pattern softens at the corners"],
vegan:["Polyurethane (vegan leather)","A fabric base with a flexible polymer surface. Lighter and cheaper than leather, with a shorter life.",["Wipe with a damp cloth only; conditioners do nothing useful.","Keep it out of long sun, which makes the surface brittle.","Once the surface cracks it cannot be repaired, so prevention is everything."],"Does not patina; eventually flakes"]};
function ltOut(){var d=LTH[$('lth').value];
 $('ltOut').innerHTML='<h4>'+d[0]+'</h4><p>'+d[1]+'</p><p style="margin:0 0 .3em"><b>How to look after it</b></p><ul>'+d[2].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><p style="margin:.7em 0 0"><b>Over time:</b> '+d[3]+'</p>';}
if($('lth')){$('lth').addEventListener('change',ltOut);ltOut();}
function num(i){var v=parseFloat($(i).value);return isNaN(v)?0:v;}
function szOut(){var w=num('bW'),h=num('bH'),d=num('bD'),use=$('bUse').value,o=$('bOut');
 if(!(w>0&&h>0&&d>0)){o.innerHTML='<h4>Enter the three measurements</h4><p>Width, height and depth in centimetres, taken at the widest points.</p>';return;}
 var vol=(w*h*d)/1000;
 var cat=vol<1.5?'Micro':vol<3?'Mini':vol<6?'Small':vol<12?'Medium':vol<20?'Large':'Oversized';
 var fits=[];
 if(w>=14&&h>=7)fits.push('A standard phone');else fits.push('A phone only if it is small');
 if(w>=19&&h>=10&&d>=4)fits.push('A long wallet and keys');
 if(w>=24&&h>=17&&d>=6)fits.push('A paperback and a small water bottle');
 if(w>=31&&h>=24&&d>=8)fits.push('A 13-inch laptop or an A4 folder');
 if(w>=38&&h>=28&&d>=14)fits.push('An overnight change of clothes');
 var need={day:{w:24,h:17,d:6,n:'everyday carry'},work:{w:33,h:25,d:9,n:'work and a laptop'},evening:{w:16,h:10,d:4,n:'an evening out'},travel:{w:40,h:28,d:16,n:'travel'}}[use];
 var ok=w>=need.w&&h>=need.h&&d>=need.d;
 o.innerHTML='<div class="score"><b>'+cat+'</b><span>'+vol.toFixed(1)+' litres</span></div><p><b>For '+need.n+':</b> '+(ok?'this is big enough.':'this is smaller than the usual minimum of '+need.w+' &times; '+need.h+' &times; '+need.d+' cm.')+'</p><p style="margin:0 0 .3em"><b>Should hold</b></p><ul class="flags"><li>'+fits.join('</li><li>')+'</li></ul><p style="margin:.7em 0 0;font-size:.9rem;color:#6B6058">Measure the bag flat at its widest points. Shaped bags hold a little less than the figures suggest.</p>';}
['bW','bH','bD','bUse'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',szOut);});
if($('bW'))szOut();
var Q=[['Stitching is even, straight and tight, with no loose threads','good'],
['Hardware feels heavy and cold, and the zip runs smoothly both ways','good'],
['The lining is stitched in neatly and sits flat','good'],
['Edges are painted or folded cleanly, with no raw fuzz','good'],
['Branding is crisp, level and correctly spelled','good'],
['The smell is leather or nothing, not strong glue or plastic','good'],
['The price is far below anything comparable from the same maker','bad'],
['The seller cannot show the inside, the base or the hardware close up','bad'],
['The dust bag, card or packaging looks newer than the bag','bad']];
function chkOut(){
 var good=0,gtot=0,bad=0;
 Q.forEach(function(q,i){var c=$('q'+i).checked;if(q[1]==='good'){gtot++;if(c)good++;}else if(c)bad++;});
 var pct=Math.round(good/gtot*100);
 var verdict=bad>=2?'Walk away':bad===1?'Serious doubts':pct>=85?'Signs are good':pct>=60?'Worth a closer look':'Too many gaps';
 var note=bad>=1?'A seller who will not photograph the inside, or packaging that looks newer than the bag, outweighs everything on the positive list.':
  (pct>=85?'Nothing here replaces buying from a seller you can hold to account, but the construction signs are consistent.':'Ask for more photographs of the stitching, the base corners and the inside of the zip before deciding.');
 $('chkOut').innerHTML='<div class="score"><b>'+verdict+'</b><span>'+good+' of '+gtot+' quality signs'+(bad?' &middot; '+bad+' warning'+(bad>1?'s':''):'')+'</span></div><p>'+note+'</p><ul class="flags"><li>Construction tells you about quality. It cannot prove who made something.</li><li class="bad">Only the brand or an accredited specialist can authenticate a bag. This checklist does not.</li><li>Buy from sellers who accept returns, and pay in a way that gives you recourse.</li></ul>';}
Q.forEach(function(q,i){var e=$('q'+i);if(e)e.addEventListener('change',chkOut);});
if($('q0'))chkOut();
})();
