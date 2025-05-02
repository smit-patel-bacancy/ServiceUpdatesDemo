# Angular Service and Signals Demo

This project demonstrates the implementation of Angular Services and Signals, showcasing how to manage state and share data between components effectively.

## 🚀 Features

### 1. Service Demo
- **Component One & Two**: Demonstrates how to share data between components using Angular Services
- **Marks Management**: Add and display subject marks
- **Arithmetic Operations**: Perform basic calculations with shared state

### 2. Basic Signals Demo
- **Counter Implementation**: Shows how to use signals for state management
- **Computed Values**: Demonstrates derived state with computed signals
- **User Profile**: Simple user data management with signals

### 3. Advanced Signals Demo
- **Todo List**: CRUD operations using signals
- **User Profile Management**: Update user information with signals
- **Async Data Handling**: Fetch and display data using signals

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── component-one/
│   │   ├── component-two/
│   │   ├── signals-one/
│   │   ├── signals-two/
│   │   └── service-demo/
│   ├── services/
│   │   ├── marks.service.ts
│   │   └── signals.service.ts
│   └── app.component.ts
```

## 💡 Key Concepts Explained

### 1. Angular Services
Services in Angular are singleton objects that can be injected into components to share data and functionality.

```typescript
// Example from marks.service.ts
@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private marksDetails: Marks[] = [];

  // Methods to manage marks
  pushIntoArray(subject: string, marks: number) {
    this.marksDetails.push({ subject, marks });
  }
}
```

### 2. Angular Signals
Signals are a new feature in Angular that provide a way to manage state reactively.

#### Basic Signal
```typescript
// Creating a signal
count = signal(0);

// Reading a signal
const currentCount = count();

// Updating a signal
count.set(5);
count.update(value => value + 1);
```

#### Computed Signal
```typescript
// Creating a computed signal
doubleCount = computed(() => this.count() * 2);
```

#### Effect
```typescript
// Running side effects
effect(() => {
  console.log(`Count changed to: ${this.count()}`);
});
```

## 🎨 UI Components

### 1. Navigation Bar
- Modern gradient background
- Responsive design
- Interactive hover effects
- Clear visual hierarchy

### 2. Component One & Two
- Clean card layout
- Interactive forms
- Real-time updates
- Consistent styling

### 3. Signals Components
- Modern UI with purple theme
- Interactive todo list
- User profile management
- Async data handling

## 🛠️ Implementation Details

### Service Implementation
1. **Marks Service**
   - Manages marks data
   - Provides methods for adding marks
   - Shares data between components

2. **Signals Service**
   - Manages todo list
   - Handles user profile
   - Manages async data

### Signal Implementation
1. **Basic Signals**
   - Counter with increment/decrement
   - Computed double value
   - User profile display

2. **Advanced Signals**
   - Todo list CRUD operations
   - User profile updates
   - Async data fetching

## 🎯 Best Practices Demonstrated

1. **State Management**
   - Using services for shared state
   - Implementing signals for reactive state
   - Proper data flow between components

2. **UI/UX**
   - Consistent color scheme
   - Responsive design
   - Interactive elements
   - Clear visual feedback

3. **Code Organization**
   - Modular component structure
   - Service-based architecture
   - Clean and maintainable code

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Open `http://localhost:4200` in your browser

## 📚 Learning Resources

### Official Documentation (angular.dev)
- [Getting Started](https://angular.dev/guide/getting-started)
- [Angular Fundamentals](https://angular.dev/guide/fundamentals)
- [Components & Templates](https://angular.dev/guide/components)
- [Dependency Injection](https://angular.dev/guide/di)
- [Signals](https://angular.dev/guide/signals)
- [Built-in Control Flow](https://angular.dev/guide/control-flow)

### Component Development
- [Component Architecture](https://angular.dev/guide/components/architecture)
- [Component Lifecycle](https://angular.dev/guide/components/lifecycle)
- [Component Communication](https://angular.dev/guide/components/communication)
- [Template Syntax](https://angular.dev/guide/templates)
- [Directives](https://angular.dev/guide/directives)

### State Management
- [Signals Overview](https://angular.dev/guide/signals)
- [RxJS Integration](https://angular.dev/guide/signals/rxjs-interop)
- [Forms & Validation](https://angular.dev/guide/forms)
- [Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
- [Template-driven Forms](https://angular.dev/guide/forms/template-driven-forms)

### Development Tools
- [Angular CLI](https://angular.dev/cli)
- [Angular DevTools](https://angular.dev/tools/devtools)
- [Language Service](https://angular.dev/tools/language-service)
- [Schematics](https://angular.dev/tools/schematics)
- [Build System](https://angular.dev/tools/build)

### Best Practices
- [Style Guide](https://angular.dev/style-guide)
- [Security](https://angular.dev/guide/security)
- [Performance](https://angular.dev/guide/performance)
- [Accessibility](https://angular.dev/guide/accessibility)
- [Testing](https://angular.dev/guide/testing)

### Tutorials & Examples
- [First Angular App](https://angular.dev/tutorial/first-app)
- [Tour of Heroes](https://angular.dev/tutorial/tour-of-heroes)
- [Forms Tutorial](https://angular.dev/tutorial/forms)
- [HTTP Client](https://angular.dev/guide/http)
- [Routing](https://angular.dev/guide/routing)

### Community & Updates
- [Angular Blog](https://blog.angular.io/)
- [Angular GitHub](https://github.com/angular/angular)
- [Angular Discord](https://discord.gg/angular)
- [Angular Twitter](https://twitter.com/angular)
- [Angular YouTube](https://www.youtube.com/@Angular)

### Additional Resources
- [Angular University](https://angular-university.io/)
- [Angular In Depth](https://indepth.dev/angular)
- [Nx Documentation](https://nx.dev/angular)
- [NgRx Documentation](https://ngrx.io/)
- [Angular Material](https://material.angular.io/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
