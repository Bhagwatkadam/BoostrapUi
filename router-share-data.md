1. Share data
	1.1 parent to child and child to parent
	@input() pdata: any;
	@output() cEvent = new EventEmiter();
	<app-child [pdata]="pComdata" (cEvent)="cEvetGetData($even)"> </app-child>
	1.2 @viewchild()
	@ViewChild(ChildComponent, { static: false }) child: any;
	//@ViewChild(ChildComponent) childDataComponent!: ChildComponent;
	(){
		let edata = this.child.data;
		this.child.callCahild();
	}
	
	1.3 Use service =
	get shareServiceData(){
		return this.shareService.getHelloMessage();
	}
	updateData(){
		this.shareService.setHelloMessage("set by paranet");
	}
	
2	router
	routerLink="home", routerLinkActive="bk", [routerLink]="about",
	children:[ { } ] => In Angular, the router lets you add child routes using the children property inside the routing module. Here you can see that the routing module has been updated with the child route and added to the array of components so we do not need to import all of them wherever we go.
	
	loadChildren => To lazy load Angular modules, use loadChildren (instead of component ) in your AppRoutingModule routes configuration as follows. 
	loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
	{
		path: 'orders',
		loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
	},
	
	imports: [RouterModule.forChild(routes)],
    imports: [RouterModule.forRoot(routes)],
	
	productlist
	productid
	{path: 'productlist', component: ProductlistComponent},
    {path: 'productlist/:id', component: ProductDetailComponent},
		
	