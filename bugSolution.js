```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: no dependency array because the effect only runs once on mount
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
    return () => clearInterval(interval); //cleanup on unmount
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```