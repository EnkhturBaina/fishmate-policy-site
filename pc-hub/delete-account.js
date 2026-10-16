const base='https://duyyynegaeewujvrwmut.supabase.co/functions/v1';
const form=document.querySelector('#delete-form'),phone=form.querySelector('#phone'),password=form.querySelector('#password'),status=form.querySelector('#delete-status'),submit=form.querySelector('#delete-submit'),toggle=form.querySelector('#password-toggle');
let busy=false;
phone.addEventListener('input',()=>{phone.value=phone.value.replace(/\D/g,'').slice(0,8);});
toggle.addEventListener('click',()=>{const show=password.type==='password';password.type=show?'text':'password';toggle.textContent=show?'Нуух':'Харах';toggle.setAttribute('aria-pressed',String(show));});
async function post(path,body,accessToken){
 const response=await fetch(`${base}/${path}`,{method:'POST',headers:{'content-type':'application/json',...(accessToken?{authorization:`Bearer ${accessToken}`}:{})},body:JSON.stringify(body),signal:AbortSignal.timeout(45000),credentials:'omit',cache:'no-store'});
 const data=await response.json().catch(()=>({}));
 if(!response.ok)throw new Error(data.error||'Үйлдлийг гүйцэтгэж чадсангүй. Дахин оролдоно уу.');
 return data;
}
form.addEventListener('submit',async event=>{
 event.preventDefault();if(busy||!form.reportValidity())return;
 busy=true;submit.disabled=true;phone.disabled=true;password.disabled=true;toggle.disabled=true;status.className='';status.textContent='Нэвтрэх мэдээллийг баталгаажуулж байна…';
 let accessToken;
 try{
  const session=await post('phone-auth',{action:'password-login',phone:phone.value,password:password.value});
  if(!session.accessToken)throw new Error('Нэвтрэлт баталгаажаагүй байна.');
  accessToken=session.accessToken;
  status.textContent='Бүртгэлийг устгаж байна…';
  const result=await post('account-delete',{confirmation:'DELETE',password:password.value},accessToken);
  if(result.deleted!==true)throw new Error('Устгал баталгаажаагүй байна.');
  form.reset();status.className='success';status.textContent=result.mediaCleanupPending?'Бүртгэл, нэвтрэх эрх болон холбоотой үндсэн өгөгдөл устлаа. Зургийн цэвэрлэгээ сервер дээр үргэлжилнэ.':'Бүртгэл, нэвтрэх эрх болон холбоотой үндсэн өгөгдөл устлаа.';
  submit.textContent='Бүртгэл устсан';
 }catch(error){
  status.className='error';status.textContent=error.name==='TimeoutError'||error.name==='TypeError'?'Үр дүнг баталгаажуулж чадсангүй. Аппд дахин нэвтэрч бүртгэлийн төлөвөө шалгана уу.':error.message;
  password.value='';submit.disabled=false;
 }finally{
  accessToken=undefined;busy=false;phone.disabled=false;password.disabled=false;toggle.disabled=false;
 }
});
