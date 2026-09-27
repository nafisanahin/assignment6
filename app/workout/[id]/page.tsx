type WorkoutDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

type Workout = {
  id: string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
  description: string;
  sets: number;
  reps: number;
  instructions: string[];
};

export default async function WorkoutDetails({ params }: WorkoutDetailsProps) {
  const { id } = await params;

  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-[#222630]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>

          {/* Workout Info */}
          <div className="flex flex-col justify-center">
            {/* Categories */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-black uppercase leading-tight md:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              {workout.description}
            </p>

            <p className="mt-6 text-sm font-bold uppercase text-white/50">
              Equipment
            </p>

            <p className="mt-1 text-lg font-bold">{workout.equipment}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
