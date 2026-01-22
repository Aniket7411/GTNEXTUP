export const StatsSection = () => {
    const stats = [
      { label: 'Yrs. of Exp.', value: '10+' },
      { label: 'Successful Projects Delivered', value: '500+' },
      { label: 'Global Countries Presence', value: '20+' },
      { label: 'Awards and Recognitions Received', value: '27+' }
    ];
  
    return (
      <section className="bg-yellow-100 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-4xl font-bold">
              <span className="text-yellow-500">{stat.value}</span>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };