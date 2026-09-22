const clients=[
{id:'CL-1001',name:'Ananya Kumar',kyc:'Verified',policy:'Health Secure',status:'Completed'},
{id:'CL-1002',name:'Rahul S',kyc:'Pending',policy:'Not Selected',status:'In Progress'},
{id:'CL-1003',name:'Priya M',kyc:'Verified',policy:'Life Protect',status:'Completed'},
{id:'CL-1004',name:'Karthik R',kyc:'Verified',policy:'Family Care',status:'Completed'}
];
function showPage(id,el){document.querySelectorAll('.page').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');document.getElementById('title').textContent=id.replace(/\b\w/g,c=>c.toUpperCase()).replaceAll('-',' ');document.querySelectorAll('.sidebar a').forEach(x=>x.classList.remove('active'));if(el)el.classList.add('active');}
function render(){document.getElementById('clientTable').innerHTML=clients.map(c=>`<tr><td>${c.id}</td><td>${c.name}</td><td><span class="badge">${c.kyc}</span></td><td>${c.policy}</td><td>${c.status}</td></tr>`).join('');}
function saveClient(e){e.preventDefault();document.getElementById('profileMsg').textContent='Client profile saved successfully. Client ID: CL-1005';}
function verifyKyc(){let n=document.getElementById('docnum').value.trim();document.getElementById('kycMsg').innerHTML=n?'<p><b>✓ KYC Verified</b> — Demo verification completed successfully.</p>':'<p>Please enter a document number.</p>';}
function showFiles(el){document.getElementById('files').innerHTML=[...el.files].map(f=>`<li>${f.name}</li>`).join('');}
function submitDocs(){document.getElementById('docMsg').textContent='Documents submitted successfully for review.';}
function selectPolicy(p){document.getElementById('policyMsg').textContent=`✓ ${p} selected successfully. Your onboarding is ready for final review.`;}
render();