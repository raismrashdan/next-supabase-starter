import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error('Supabase URL or Service Role Key is missing. Make sure they are set in your .env file.');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    async function main() {
      console.log('Seeding database...');
      const { error } = await supabase.from('waitlist').insert({
        email: 'seed@example.com',
      });
      if (error && error.code !== '23505') { // 23505 is unique_violation, ignore if already exists
        console.error('Error seeding waitlist:', error);
        process.exit(1);
      } else {
        console.log('Seeded waitlist table with seed@example.com.');
      }
    }

    main().catch(err => {
      console.error(err);
      process.exit(1);
    });