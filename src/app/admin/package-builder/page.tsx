
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import PackageBuilder from '@/pages/admin/PackageBuilder';

export default function PackageBuilderPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      
      if (!data.user) {
        router.push('/auth');
      }
    };
    
    checkUser();
  }, [router]);

  return <PackageBuilder />;
}
