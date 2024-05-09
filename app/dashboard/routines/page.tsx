import { lusitana } from '@/app/ui/fonts';
import RoutinesSubWidget from '@/app/ui/routines/routines_molecule';
import { fetchLatestRoutines } from '@/app/lib/data';

const latestRoutines = await fetchLatestRoutines();

export default function Page() {
    
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Routines View
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { < RoutinesSubWidget latestRoutines={latestRoutines }  /> }
        { < RoutinesSubWidget latestRoutines={latestRoutines } /> }
      </div>
    </main>
  );
}