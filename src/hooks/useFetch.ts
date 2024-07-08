"use client";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";

interface fetchProps {
  tableName: string;
}
export const useFetch = ({ tableName }: fetchProps) => {
  const [data, setData] = useState<[] | undefined | null>(null);
  const [error, setError] = useState<[] | undefined | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching

      try {
        const response = await supabase.from(`${tableName}`).select();
        setData(response.data); // Update data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Set loading to false after fetching (regardless of success or error)
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
