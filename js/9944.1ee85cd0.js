"use strict";(self["webpackChunksalsavica"]=self["webpackChunksalsavica"]||[]).push([[9944],{9944:(a,t,e)=>{e.r(t),e.d(t,{default:()=>W});var l=e(3673),s=e(2323);const n={class:"col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md"},o={class:"row q-mt-lg"},r=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col"},[(0,l._)("div",{class:"col-2 q-table__title text-h5"},[(0,l._)("strong",null,"INVOICE")]),(0,l._)("p",{class:"text-caption"},"#ID-INVOICE")])],-1),i={class:"row col-12"},u={class:"col"},d=(0,l._)("div",{class:"text-subtitle1 text-weight-medium"},[(0,l._)("strong",null,"PELANGGAN")],-1),c={class:"text-caption"},p=(0,l._)("div",{class:"text-caption"},"ID Pelanggan : ID-019283761",-1),m=(0,l._)("div",{class:"text-caption"},"Telephone : 089765431212",-1),g=(0,l._)("div",{class:"col"},[(0,l._)("div",{class:"text-subtitle1 text-weight-medium text-right"},[(0,l._)("strong",null,"ALAMAT")]),(0,l._)("div",{class:"text-caption text-right"},"Jl. Pegangsaan Timur, No. 26 Jakarta Pusat"),(0,l._)("div",{class:"text-caption text-right"},"01 Januari 2021")],-1);function h(a,t,e,h,_,w){const f=(0,l.up)("q-breadcrumbs-el"),b=(0,l.up)("q-breadcrumbs"),j=(0,l.up)("q-card"),v=(0,l.up)("q-td"),k=(0,l.up)("q-tr"),q=(0,l.up)("q-table"),x=(0,l.up)("q-card-section"),T=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(T,{class:"q-pr-md q-pl-md q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(j,{class:"my-card q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{separator:"---",class:"text-blue-10","active-color":"secondary"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{label:"Invoice",icon:"receipt"})])),_:1})])),_:1}),(0,l._)("div",o,[r,(0,l._)("div",i,[(0,l.Wm)(j,{class:"my-card col",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{class:"col-12 q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{title:"Master Data Produk","aria-label":"Text",class:"text-h5",rows:_.rows,flat:"","hide-bottom":"",columns:_.columns},{"top-left":(0,l.w5)((()=>[(0,l._)("div",u,[d,(0,l._)("div",c,(0,s.zw)(_.pelanggan),1),p,m])])),"top-right":(0,l.w5)((()=>[g])),body:(0,l.w5)((a=>[(0,l.Wm)(k,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{key:"id_penjualan",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.row.id_penjualan),1)])),_:2},1032,["props"]),(0,l.Wm)(v,{key:"nama_product",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.row.nama_product),1)])),_:2},1032,["props"]),(0,l.Wm)(v,{key:"jumlah_penjualan",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.row.jumlah_penjualan),1)])),_:2},1032,["props"]),(0,l.Wm)(v,{key:"harga_jual",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.row.harga_jual),1)])),_:2},1032,["props"]),(0,l.Wm)(v,{key:"total",props:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.row.total),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})])),_:1})])),_:1})])])])])),_:1})}const _={name:"PageIndex",data(){return{visibles:!1,filterData:null,totalHutang:0,totalLunas:0,pelanggan:null,grandTotal:null,columns:[{name:"id_penjualan",required:!0,label:"ID Barang",align:"left",field:"id_penjualan",sortable:!0},{name:"nama_product",required:!0,label:"Nama barang",align:"left",field:"nama_product",sortable:!0},{name:"jumlah_penjualan",required:!0,label:"Quantity",align:"left",field:"jumlah_penjualan",sortable:!0},{name:"harga_jual",required:!0,label:"Harga barang",align:"left",field:"harga_jual",sortable:!0},{name:"total",required:!0,label:"Total",align:"left",field:"total",sortable:!0}],rows:[]}},created(){this.getPenjualan()},methods:{getPenjualan(){try{this.$api.get("penjualan/get").then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const t=a.data.result;this.rows=t;for(let a=0;a<t.length;a++)"Lunas"===t[a].status_penjualan&&(this.totalLunas+=t[a].grandTotal),"Hutang"===t[a].status_penjualan&&(this.totalHutang+=t[a].grandTotal)}}))}catch(a){this.$showNotif("Terjadi kesalahan !","negative")}},delete(a){this.$dialog.create({title:"Peringatan",message:"Apakah Anda Yakin ?",cancel:!0,persistent:!0}).onOk((()=>{try{this.$api.delete("/penjualan/delete/"+a).then((a=>{!0!==a.data.status?this.$showNotif(a.data.message,"negative"):(this.totalLunas=0,this.totalHutang=0,this.getPenjualan(),this.$showNotif(a.data.message,"positive"))}))}catch(t){console.log(t),this.$showNotif("Terjadi kesalahan !","negative")}}))},showDetail(a,t,e){const l=t.map((a=>({nama_product:a.nama_product,harga_jual:this.$formatPrice(a.harga_jual),jumlah_penjualan:a.jumlah_penjualan,total:this.$formatPrice(a.total)})));this.detail.pelanggan=a,this.detail.visible=!0,this.detail.rows=l,this.detail.grandTotal=e}}};var w=e(4379),f=e(151),b=e(1481),j=e(5926),v=e(1993),k=e(5589),q=e(8186),x=e(3884),T=e(7518),P=e.n(T);_.render=h;const W=_;P()(_,"components",{QPage:w.Z,QCard:f.Z,QBreadcrumbs:b.Z,QBreadcrumbsEl:j.Z,QTable:v.Z,QCardSection:k.Z,QTr:q.Z,QTd:x.Z})}}]);