
import { Calendar, Users } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';

interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}

interface BatchDatesTableProps {
  batchDates: BatchDate[];
}

const BatchDatesTable = ({ batchDates }: BatchDatesTableProps) => {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900 flex items-center">
          <Calendar className="h-5 w-5 text-wanderon-primary mr-2" />
          Available Batch Dates
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Available Slots</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {batchDates.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell className="font-medium">{batch.startDate}</TableCell>
                <TableCell>{batch.endDate}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-24">
                      <div 
                        className={cn(
                          "h-2.5 rounded-full",
                          batch.availableSlots <= 3 ? "bg-red-500" : "bg-green-500"
                        )}
                        style={{ width: `${(batch.availableSlots / batch.totalSlots) * 100}%` }}
                      ></div>
                    </div>
                    <span className={cn(
                      "text-sm",
                      batch.availableSlots <= 3 ? "text-red-600" : "text-gray-700"
                    )}>
                      {batch.availableSlots}/{batch.totalSlots}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BatchDatesTable;
