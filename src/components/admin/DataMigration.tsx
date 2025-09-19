import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, Database } from 'lucide-react';
import { toast } from 'sonner';
import { migrateStaticDataToDatabase } from '@/utils/migrateData';

const DataMigration = () => {
  const [migrating, setMigrating] = useState(false);
  const [migrated, setMigrated] = useState(false);

  const handleMigration = async () => {
    setMigrating(true);
    try {
      const result = await migrateStaticDataToDatabase();
      if (result.success) {
        toast.success('Data migration completed successfully!');
        setMigrated(true);
      } else {
        toast.error('Migration failed. Check console for details.');
      }
    } catch (error) {
      toast.error('Migration failed. Please try again.');
      console.error(error);
    } finally {
      setMigrating(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Data Migration
        </CardTitle>
        <CardDescription>
          Import your existing trips, categories, and testimonials into the database to start using the CMS.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          {migrated ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>Data has been migrated successfully!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-amber-600">
              <AlertCircle className="h-5 w-5" />
              <span>Click below to migrate your existing data to the database</span>
            </div>
          )}
          
          <Button 
            onClick={handleMigration}
            disabled={migrating || migrated}
            className="ml-auto"
          >
            {migrating ? 'Migrating...' : migrated ? 'Migration Complete' : 'Start Migration'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataMigration;