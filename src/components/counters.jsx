import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) =>
      counter.id === counterId
        ? { ...counter, value: (counter.value += 1) }
        : counter
    );
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) =>
      counter.id === counterId
        ? {
            ...counter,
            value:
              counter.value <= 0 ? (counter.value = 0) : (counter.value -= 1),
          }
        : counter
    );
    setCounters(newCounters);
  };

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
