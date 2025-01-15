```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the count in the useEffect dependency array
    setCount(count + 1);
  }, [count]); // count is in the dependency array

  return <div>Count: {count}</div>;
}
```