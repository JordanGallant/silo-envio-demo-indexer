/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Silo,
  Silo_Approval,
  Silo_DelegateChanged,
  Silo_DelegateVotesChanged,
  Silo_OwnershipTransferred,
  Silo_Transfer,
} from "generated";

Silo.Approval.handler(async ({ event, context }) => {
  const entity: Silo_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Silo_Approval.set(entity);
});

Silo.DelegateChanged.handler(async ({ event, context }) => {
  const entity: Silo_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.Silo_DelegateChanged.set(entity);
});

Silo.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: Silo_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousBalance: event.params.previousBalance,
    newBalance: event.params.newBalance,
  };

  context.Silo_DelegateVotesChanged.set(entity);
});

Silo.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Silo_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Silo_OwnershipTransferred.set(entity);
});

Silo.Transfer.handler(async ({ event, context }) => {
  const entity: Silo_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Silo_Transfer.set(entity);
});
