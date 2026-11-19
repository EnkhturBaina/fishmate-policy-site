const id=new URLSearchParams(location.search).get('order_id');
if(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(id||''))document.getElementById('open-app').href=`selbeg://payment-return/${id}`;
