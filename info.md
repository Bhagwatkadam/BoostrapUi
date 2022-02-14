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
		
	====
    git status
    git add  src/app/product-detail/
    git add .
    git commit -m "router, share data."
    git pull
    git pull origin main
    git push 
    git push origin main
    git checkout
    git branch -b "mybranch" from origin main

	git pull --tags origin main
	git push origin main:main	
	====


	https://stackblitz.com/angular/naavjopgege?file=src%2Fapp%2Fhighlight.\\\\\


1. JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.
A closure is a function having access to the parent scope, even after the parent function has closed.
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();  add(), add(), add().

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
console.log(add5(2));  // 7


2. JIT - Compile TypeScript just in time for executing it.
Compiled in the browser.
Each file compiled separately.
No need to build after changing your code and before reloading the browser page.
Suitable for local development.

AOT - Compile TypeScript during build phase.
Compiled by the machine itself, via the command line (Faster).
All code compiled together, inlining HTML/CSS in the scripts.
No need to deploy the compiler (Half of Angular size).
More secure, original source not disclosed.
Suitable for production builds.

3. The Angular router is a core part of the Angular platform. It enables developers to build Single Page Applications with multiple views and allow navigation between these views. 
Angular router can interpret a browser URL as an instruction to navigate to a client-generated view. It can pass optional parameters along to the supporting view component that help it decide what specific content to present.

4. An Angular service is just a JavaScript function. All we have to do is create a class and add methods and properties. Then we can create an instance of this class in our Component and call its methods. One of the best uses of services is to get data from a data source.
A reusable Angular service is designed to encapsulate business logic and data with different components of Angular.

5. Directives are classes that add additional behavior to elements in your Angular applications.
Angular directives are used to extend the power of the HTML by giving it new syntax.

6. Hoisting is JavaScript's default behavior of moving all declarations to the top.
Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. 

