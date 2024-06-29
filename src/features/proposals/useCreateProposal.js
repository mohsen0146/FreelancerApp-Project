import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalsApi } from "../../services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isCreating, createProposal };

}