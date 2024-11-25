function Fds() {
    const u = [1, 9, 3, 8, 6, 5, 7, 4, 2]; // 4 = 9, 5 = 6
    return (
      <ul>
        {u.filter((f) => f > 5) // 1 = filter, 2 = f, 3 = 5
          .map((s) => (
            <li>{s}</li> // 6 = s
          ))}
      </ul>
    );
  }