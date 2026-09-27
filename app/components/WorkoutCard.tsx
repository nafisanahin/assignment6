type Workout = {
  id: string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
};

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-[#222630]">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category pills */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-white/50">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-white/60">
          <span>{workout.duration} MIN</span>
          <span>{workout.calories} CAL</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </article>
  );
}
